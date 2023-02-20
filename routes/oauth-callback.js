const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/", (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: "https://anilist.co/api/v2/oauth/token",
      form: {
        grant_type: "authorization_code",
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        redirect_uri: config.REDIRECT_URL,
        code: req.query.code,
      },
    },

    (error, response, body) => {
      // save token to session
      req.session.token = JSON.parse(body).access_token;

      // redirect to the React app
      res.redirect(`http://localhost:${config.CLIENT_PORT}`);
    }
  );
});

module.exports = router;
