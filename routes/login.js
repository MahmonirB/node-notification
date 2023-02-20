const express = require('express');
const router = express.Router();
const config = require('../../config');

router.get('/', (req, res) => {
  res.redirect(`http://localhost:${config.SERVER_PORT}/oauth2/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code`);
});

module.exports = router;
