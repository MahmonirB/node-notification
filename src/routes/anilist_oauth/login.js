const express = require("express");
const router = express.Router();
const config = require("../../../config");

router.get("/", (req, res) => {
  res.redirect(
    `https://anilist.co/api/v2/oauth/authorize?client_id=${config.ANILIST_CLIENT_ID}&redirect_uri=${config.ANILIST_REDIRECT_URL}&response_type=code`
  );
});

module.exports = router;
