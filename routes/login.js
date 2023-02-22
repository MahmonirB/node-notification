const express = require("express");
const router = express.Router();
const config = require("../config");

router.get("/", (req, res) => {
  res.redirect(
    `https://anilist.co/api/v2/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&response_type=code`
  );
});

module.exports = router;
