const express = require("express");
const session = require("express-session");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/callback", (req, res) => {
  if (req.session.token) {
    const requestToken = req.session.token;

    request({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&code=${requestToken}`,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      access_token = response.data.access_token;
      res.redirect("/user/success");
    });
  }
});

router.get("/success", function (req, res) {
  axios({
    method: "get",
    url: `https://api.github.com/user`,
    headers: {
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => {
    res.render("http://localhost:5173", { userData: response.data });
  });
});

module.exports = router;
