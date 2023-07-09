const puppeteer = require("puppeteer");
const { promisify } = require("util");
const fs = require("fs");
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const { join, relative } = require("path");

const chartPaths = join(process.cwd(), "assets", "public", "charts");

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

module.exports.getMarkdownChartMemSeries = async function (
  outputResults,
  metricName,
  metricLabel
) {
  const columnsData = outputResults.map((result) => [
    `${result.name}`,
    ...result.memSeries,
  ]);

  const file = await module.exports.chartScreenshot(
    {
      data: {
        columns: columnsData,
        type: "area",
        labels: true,
      },
      axis: {
        y: {
          // type: "log",
          label: "Memory (Mb)",
        },
        // x: {
        //   type: "category",
        //   label: "Number of routes",
        //   min: 1,
        // },
      },
      transition: {
        duration: 0,
      },
    },
    chartPaths,
    metricName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `#### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
};

module.exports.getMarkdownBarChart = async function (
  outputResults,
  metricName,
  metricLabel
) {
  const columnsData = outputResults.map((result) => [
    `${result.name}`,
    `${result[metricName]}`,
  ]);

  // const max = outputResults.reduce((acc, result) => {
  //   return Math.max(acc, parseFloat(result[metricName]));
  // }, 0);

  const file = await module.exports.chartScreenshot(
    {
      data: {
        x: "x",
        columns: [["x", metricLabel], ...columnsData],
        type: "bar",
        labels: true,
      },
      axis: {
        // y: {
        //   show: false,
        //   type: "log",
        //   max: max * 1.5,
        // },
        x: {
          type: "category",
        },
      },
      transition: {
        duration: 0,
      },
    },
    chartPaths,
    metricName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `#### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
};
