const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const fetchPrice = async (link) => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);

    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });

    await page.waitForSelector(
      ".hdca-product__description-pricing-price-value",
      { timeout: 90000 } // Increased timeout to 90 seconds
    );

    const grabPrice = await page.evaluate(() => {
      const price = document.querySelector(
        ".hdca-product__description-pricing-price-value"
      );
      return price ? price.innerHTML : null;
    });
    console.log(grabPrice);
    return grabPrice;
  } catch (error) {
    console.error("Error fetching price:", error);
    return null;
  } finally {
    if (browser) {
      await browser.close();
      console.log("scraping complete");
    }
  }
};

module.exports = fetchPrice;
