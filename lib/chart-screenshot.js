const puppeteer = require("puppeteer");

/**
 * Generate chart image screenshot
 * @param {object} options billboard.js generation option object
 * @param {string} path screenshot image full path with file name
 */
module.exports.chartScreenshot = async function (options = {}) {
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

  const base64Img = await content.screenshot({
    omitBackground: true,
    encoding: "base64",
  });

  await page.close();
  await browser.close();

  return base64Img;
};
