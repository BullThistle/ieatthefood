const express = require('express');
const axios = require('axios');
const keys = require ('./keys.js');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/restaurant', (req, res, next) => {
  console.log(req.query);
  axios({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',
    headers: {
      Authorization: `Bearer ${keys.YELPKEY}`
    },
    params: {
      latitude: req.query.latitude,
      longitude: req.query.longitude
    }
  })
  .then((response) => {
    console.log(response.data.businesses);
    res.send({ restaurant: response.data.businesses[0] });
  })
  .catch((error) => {
    const message = `Yelp Request Failed: ${error.response.status} ${error.response.statusText}`;

    console.error(message);
    res.status(503).send({message: message});
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
