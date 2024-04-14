// webScraper.js

const axios = require('axios');
const cheerio = require('cheerio');

async function scrape(url, selectors) {
    try {
        // Fetch HTML content from the URL
        const response = await axios.get(url);
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        // Initialize result object
        const result = {};

        // Loop through each selector and extract data
        for (const key in selectors) {
            if (selectors.hasOwnProperty(key)) {
                const selector = selectors[key];
                const elements = $(selector);

                // Extract data based on the selector
                const data = elements.map((index, element) => $(element).text()).get();

                // Add extracted data to result object
                result[key] = data;
            }
        }

        return result;
    } catch (error) {
        console.error('Error scraping website:', error);
        return null;
    }
}

module.exports = scrape;
