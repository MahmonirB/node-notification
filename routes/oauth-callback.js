const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../../config');

router.get('/', (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: 'POST',
      uri: `http://localhost:${config.SERVER_PORT}/oauth2/token`,
      form: {
        'client_id': config.CLIENT_ID,
        'client_secret': config.CLIENT_SECRET,
        'code': req.query.code,
        'grant_type': 'authorization_code',
        'redirect_uri': config.REDIRECT_URL,
      }
    },

    // callback
    (error, response, body) => {
      // redirect to the React app
      res.redirect(`http://localhost:${config.CLIENT_PORT}`);
    }
  );
});

module.exports = router;
