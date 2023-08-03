const express = require('express');
const db = require('./db')
const Url = require('./db/model')
const cors = require('cors');

// create express server
const app = express();
app.use(express.json());
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// post route to create short URL
app.post('/shortUrl', async (req, res) => {
  try {
    const { fullUrl } = req.body;
    let url = await Url.findOne({ fullUrl: fullUrl });

    if (!url) {
      url = new Url({ fullUrl: fullUrl });
      await url.save();
    }
    res.send({ shortUrl: 'http://localhost:5000/' + url.shortUrl });

  } catch (error) {
    res.status(500).send({ error: 'An error occurred while processing your request' });
  }
});

// get route to redirect to original URL
app.get('/:shortUrl', async (req, res) => {
  try {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ shortUrl: shortUrl });

    if (!url) {
      return res.status(404).send({ error: 'Url not found' });
    }

    res.redirect(url.fullUrl);

  } catch (error) {
    res.status(500).send({ error: 'An error occurred while processing your request' });
  }
});

// start server
app.listen(5000, () => console.log('Server started on port 5000'));