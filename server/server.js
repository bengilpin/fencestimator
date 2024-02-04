require('events').EventEmitter.defaultMaxListeners = 15;

const express = require('express');
const cors = require('cors');
const fetchPrice = require("./scraper");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/scrapeyscrape', async (req, res) => {
  const { link } = req.body;
  try {
      const price = await fetchPrice(link);
      res.json({price});
  } catch (error) {
      res.status(500).json({ error: 'Error scraping price' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});