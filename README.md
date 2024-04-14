# Web Scraping Library

A simple JavaScript library for scraping data from websites. This library allows you to fetch HTML content from a URL and extract data using CSS selectors.

## Installation

To use this library in your Node.js project, you can install it via npm:

```bash
npm install web-scraping-library
```

## Usage

```javascript
const scrape = require('web-scraping-library');

// Specify the URL to scrape
const url = 'https://example.com';

// Specify CSS selectors for data extraction
const selectors = {
    title: 'h1', // Example: Extract the title using h1 selector
    paragraph: 'p', // Example: Extract paragraphs using p selector
    // Add more selectors as needed
};

// Scrape the website and extract data
scrape(url, selectors)
    .then(data => {
        console.log('Scraped data:', data);
    })
    .catch(error => {
        console.error('Error scraping website:', error);
    });
```

## API

### `scrape(url, selectors)`

- `url`: The URL of the website to scrape.
- `selectors`: An object containing CSS selectors for data extraction. The keys represent the names of the data fields, and the values represent the corresponding CSS selectors.

Returns a promise that resolves with an object containing the extracted data.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing and manipulating HTML content.

## Contributing

Contributions are welcome! If you have ideas for improving this library or want to report a bug, please open an issue or submit a pull request on GitHub.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
