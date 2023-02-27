const express = require("express");
const session = require("express-session");
const queryString = require("querystring");
const router = express.Router();
const request = require("request");
const config = require("../../../config");

router.get("/callback", (req, res) => {
  if (req.query.code) {
    const requestToken = req.query.code;
    request(
      {
        method: "POST",
        uri: `https://github.com/login/oauth/access_token?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&code=${requestToken}`,
      },
      (error, response, body) => {
        const data = queryString.parse(body);
        const sessionObj = req.session;
        session.access_token = data.access_token;
        res.redirect("http://localhost:5173");
      }
    );
  }
});

router.get("/success", function (req, res) {
  const access_token = session.access_token;

  if (access_token) {
    request(
      {
        method: "get",
        uri: `https://api.github.com/user`,
        headers: {
          Authorization: "token " + access_token,
          "user-agent": "node.js",
        },
      },
      (error, response, body) => {
        const userData = JSON.parse(body);
        return res.status(200).json({ userData, access_token });
      }
    );
  }
});

module.exports = router;
