const fs = require("fs");
const { join, relative } = require("path");
const os = require("os");
const { chartScreenshot } = require("../lib/chart-screenshot");

const chartPaths = join(process.cwd(), "assets", "public", "charts");

function readableHRTimeMs(diff) {
  return (diff[0] * 1e9 + diff[1]) / 1000000;
}

async function updateReadme(startupResults) {
  const machineInfo = `${os.platform()} ${os.arch()} | ${
    os.cpus().length
  } vCPUs | ${(os.totalmem() / 1024 ** 3).toFixed(1)}GB Mem`;
  const benchmarkMd = `## Metrics
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`npm run metrics\` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)
${startupResults}
`;
  const md = fs.readFileSync("METRICS.md", "utf8");
  fs.writeFileSync(
    "METRICS.md",
    md.split("## Metrics")[0] + benchmarkMd,
    "utf8"
  );
}

async function getMarkdown() {
  const results = fs.readdirSync(__dirname).filter((x) => x.endsWith(".txt"));

  const resultData = getAllResults(results);
  const groupedByPackage = groupResultsByPackage(resultData);
  const char = await getMarkdownChat(
    groupedByPackage,
    "Cold starts:  listen time (ms) lower is better",
    "cold-starts"
  );

  let md = `\n${char}

  | | startup(ms) | listen(ms) |
  |-| -           | -          |`;

  for (const temp of resultData) {
    md += `\n| ${temp.name.replace(".txt", "")} | ${temp.startupAverage} | ${
      temp.listenAverage
    } |`;
  }

  return md;
}

function getAllResults(results) {
  const resultsFiles = fs
    .readdirSync(__dirname)
    .filter((x) => x.endsWith(".txt"));
  const resultData = [];
  for (const r of resultsFiles) {
    const data = fs.readFileSync(join(__dirname, r), {
      encoding: "utf-8",
    });
    const lines = data.split("\n").filter(Boolean);
    const temp = {
      name: r,
      startup: 0,
      listen: 0,
      startupAverage: 0,
      listenAverage: 0,
      items: lines.length,
      numberOfRoutes: parseInt(r.split("-")[0]),
    };
    lines.forEach((x) => {
      const [startup, listen] = x.split("|");
      temp.startup += readableHRTimeMs(
        startup.split(",").map((x) => parseInt(x))
      );
      temp.listen += readableHRTimeMs(
        listen.split(",").map((x) => parseInt(x))
      );
      temp.startupAverage = (temp.startup / lines.length).toFixed(0);
      temp.listenAverage = (temp.listen / lines.length).toFixed(0);
    });
    resultData.push(temp);
  }
  return resultData;
}

function groupResultsByPackage(resultData) {
  const orderedByNumberOfRoutes = resultData.sort((a, b) => {
    if (isNaN(a.numberOfRoutes) || isNaN(b.numberOfRoutes))
      return Number.POSITIVE_INFINITY;
    return a.numberOfRoutes - b.numberOfRoutes;
  });
  const groupedResults = {};
  const packageNames = ["deepkit", "mion", "fastify"]; // must match the name in the result files
  packageNames.forEach((packageName) => {
    orderedByNumberOfRoutes.forEach((result) => {
      const isPackage = result.name.includes(packageName);
      if (isPackage) {
        const group = groupedResults[packageName] || [];
        group.push(result);
        groupedResults[packageName] = group;
      }
    });
  });
  return groupedResults;
}

if (process.argv.length >= 3 && process.argv[2] === "-u") {
  console.debug("Updating METRICS...");
  run();
}

async function run() {
  const md = await getMarkdown();
  updateReadme(md);
  console.log(md);
}

async function getMarkdownChat(groupedResults, metricLabel, chartName) {
  const listen = (group) => group.map((x) => x.listenAverage);
  const startup = (group) => group.map((x) => x.startupAverage);

  // TODO this can be done dinamically so more packages can be added
  const columnsData = [
    // [`deepkit-startup`, ...startup(groupedResults.deepkit)],
    [`deepkit-listen`, ...listen(groupedResults.deepkit)],
    // [`fastify-startup`, ...startup(groupedResults.fastify)],
    [`fastify-listen`, ...listen(groupedResults.fastify)],
    // [`mion-startup`, ...startup(groupedResults.mion)],
    [`mion-listen`, ...listen(groupedResults.mion)],
  ];

  const columnHeaders = groupedResults.mion.map((x) => x.numberOfRoutes);

  const file = await chartScreenshot(
    {
      data: {
        x: "x",
        columns: [["x", ...columnHeaders], ...columnsData],
        type: "area",
        labels: true,
      },
      axis: {
        y: {
          // type: "log",
        },
        x: {
          type: "category",
          label: "Number of routes",
          min: 1,
        },
      },
      transition: {
        duration: 0,
      },
    },
    chartPaths,
    chartName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
}
