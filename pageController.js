const pageScraper = require("./pageScraper");
async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (error) {
    console.log("could not resolve the browser instance ", error);
  }
}
module.exports = (browserInstance) => scrapeAll(browserInstance);
