const puppeteer = require("puppeteer");
const { promisify } = require("util");
const fs = require("fs");
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const { join } = require("path");

/**
 * Generate chart image screenshot
 * @param {object} options billboard.js generation option object
 * @param {string} path screenshot image full path with file name
 */
module.exports.chartScreenshot = async function (
  options = {},
  chartsDirectory,
  chartName
) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // load billboard.js assets fro CDN
  await page.addStyleTag({
    url: "https://cdn.jsdelivr.net/npm/billboard.js/dist/theme/datalab.min.css",
  });
  await page.addStyleTag({
    content: "body { color: #8fce50 !important; }",
  }); // unfortunately this does nothing
  await page.addScriptTag({
    url: "https://cdn.jsdelivr.net/npm/billboard.js/dist/billboard.pkgd.min.js",
  });

  await page.evaluate((options) => {
    bb.generate(options);
  }, options);

  const content = await page.$(".bb");

  let returnData;
  let path;
  const doBase64 = !chartsDirectory || !chartName;

  if (doBase64) {
    returnData = await content.screenshot({
      omitBackground: true,
      encoding: "base64",
    });
  } else {
    await ensureDirectoryExist(chartsDirectory);
    path = join(chartsDirectory, `${chartName}.png`);
    returnData = await content.screenshot({
      omitBackground: true,
      path,
    });
  }

  await page.close();
  await browser.close();

  return doBase64 ? returnData : path;
};

async function ensureDirectoryExist(directory) {
  try {
    await access(directory);
  } catch (e) {
    await mkdir(directory);
  }
}
