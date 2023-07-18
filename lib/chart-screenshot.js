const puppeteer = require("puppeteer");
const { promisify } = require("util");
const fs = require("fs");
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const { join, relative } = require("path");

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
  metricLabel,
  chartDirectory,
  maxToDisplay = 3,
  namesToDisplay = []
) {
  const slicedResults = namesToDisplay.length
    ? outputResults.filter((result) => namesToDisplay.includes(result.name))
    : outputResults.slice(0, maxToDisplay);
  const columnsData = slicedResults.map((result) => [
    `${result.name}`,
    ...result.memSeries,
  ]);

  const file = await module.exports.chartScreenshot(
    {
      // size: {
      //   height: 600,
      // },
      point: {
        focus: {
          only: true,
        },
      },
      data: {
        columns: columnsData,
        type: "line",
        labels: false,
      },
      axis: {
        y: {
          type: "log",
          label: "Memory (Mb)",
        },
        x: {
          label: "Time (ms)",
        },
      },
      transition: {
        duration: 0,
      },
    },
    chartDirectory,
    metricName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `#### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
};

module.exports.getMarkdownBarChart = async function (
  outputResults,
  metricName,
  metricLabel,
  chartDirectory
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
          labels: { rotate: 75 },
        },
      },
      transition: {
        duration: 0,
      },
    },
    chartDirectory,
    metricName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `#### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
};
