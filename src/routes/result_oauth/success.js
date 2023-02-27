const express = require("express");
const session = require("express-session");
const router = express.Router();
const request = require("request");

router.get("/", function (req, res) {
  const access_token = session.access_token;

  if (access_token) {
    return res.status(200).json({ access_token });
  }
});

module.exports = router;
