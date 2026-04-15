-- wrk script for mion-benchmarks
-- Behavior is selected via env vars set by lib/wrk.js:
--   WRK_BENCH_TYPE = "hello" | "update-user" | "update-simple-user"
--   WRK_IS_MION    = "1" when the target is a mion handler (body wrapped in array)
--   WRK_URL        = full target URL (for reporting only)
--   WRK_CONNECTIONS = connection count (for reporting only)

local benchType = os.getenv("WRK_BENCH_TYPE") or "hello"
local isMion = os.getenv("WRK_IS_MION") == "1"

math.randomseed(os.time())

local BODY_COMPLEX_POST = ',"username":"john_smith","email":"john.smith@example.com","profile":{"firstName":"John","lastName":"Smith","displayName":"John S.","bio":"Software developer and tech enthusiast","avatarUrl":"https://example.com/avatars/john.jpg","dateOfBirth":"1990-05-15T00:00:00.000Z"},"role":"user","status":"active","address":{"street":"123 Main Street","city":"San Francisco","state":"CA","zipCode":"94102","country":"USA"},"paymentMethods":[{"type":"credit_card","lastFourDigits":"4242","expiryMonth":12,"expiryYear":2025,"brand":"visa"},{"type":"paypal","email":"john.paypal@example.com"}],"preferences":{"theme":"dark","language":"en-US","timezone":"America/Los_Angeles","notifications":{"email":true,"sms":false,"push":true,"frequency":"daily"}},"createdAt":"2020-01-15T10:30:00.000Z","updatedAt":"2024-12-17T02:24:00.000Z","lastLoginAt":"2024-12-16T18:45:00.000Z","tags":["premium","early-adopter","verified"]}'

local BODY_SIMPLE_POST = ',"name":"John","surname":"Doe","lastUpdate":"2024-01-15T10:30:00.000Z"}'

local function randomId()
  return math.floor(math.random() * 9007199254740991)
end

local function buildBody()
  local id = randomId()
  local body
  if benchType == "update-user" then
    body = '{"id":' .. id .. BODY_COMPLEX_POST
  else
    body = '{"id":' .. id .. BODY_SIMPLE_POST
  end
  if isMion then
    body = "[" .. body .. "]"
  end
  return body
end

if benchType == "hello" then
  wrk.method = "GET"
else
  wrk.method = "POST"
  wrk.headers["Content-Type"] = "application/json"
  wrk.headers["accept"] = "*/*"

  request = function()
    return wrk.format(nil, nil, nil, buildBody())
  end
end

done = function(summary, latency, requests)
  local duration_s = summary.duration / 1e6
  local errs = summary.errors or {}
  local totalErrors = (errs.connect or 0) + (errs.read or 0) + (errs.write or 0)
                    + (errs.status or 0) + (errs.timeout or 0)

  local function pMs(p) return latency:percentile(p) / 1000 end
  local function pReq(p) return requests:percentile(p) end

  local url = os.getenv("WRK_URL") or ""
  local connections = tonumber(os.getenv("WRK_CONNECTIONS")) or 0

  local reqsPerSec = summary.requests / duration_s
  local bytesPerSec = summary.bytes / duration_s

  local json = string.format(
    '{"url":"%s","connections":%d,"pipelining":1,"duration":%f,"errors":%d,'
    .. '"latency":{"average":%f,"mean":%f,"stddev":%f,"min":%f,"max":%f,'
    .. '"p2_5":%f,"p50":%f,"p75":%f,"p90":%f,"p97_5":%f,"p99":%f,"p99_9":%f,"p99_99":%f,"p99_999":%f},'
    .. '"requests":{"average":%f,"mean":%f,"stddev":%f,"min":%f,"max":%f,"total":%d,"sent":%d,'
    .. '"p2_5":%f,"p50":%f,"p75":%f,"p90":%f,"p97_5":%f,"p99":%f,"p99_9":%f,"p99_99":%f,"p99_999":%f},'
    .. '"throughput":{"average":%f,"mean":%f,"stddev":0,"min":0,"max":0,"total":%d,'
    .. '"p2_5":0,"p50":0,"p75":0,"p90":0,"p97_5":0,"p99":0,"p99_9":0,"p99_99":0,"p99_999":0}}',
    url, connections, duration_s, totalErrors,
    latency.mean / 1000, latency.mean / 1000, latency.stdev / 1000,
    latency.min / 1000, latency.max / 1000,
    pMs(2.5), pMs(50), pMs(75), pMs(90), pMs(97.5), pMs(99), pMs(99.9), pMs(99.99), pMs(99.999),
    reqsPerSec, requests.mean, requests.stdev, requests.min, requests.max,
    summary.requests, summary.requests,
    pReq(2.5), pReq(50), pReq(75), pReq(90), pReq(97.5), pReq(99), pReq(99.9), pReq(99.99), pReq(99.999),
    bytesPerSec, bytesPerSec, summary.bytes
  )

  io.write("__WRK_RESULT__", json, "\n")
end
