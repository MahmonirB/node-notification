const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../../config");

router.get("/", (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: "https://anilist.co/api/v2/oauth/token",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      json: {
        grant_type: "authorization_code",
        client_id: config.ANILIST_CLIENT_ID,
        client_secret: config.ANILIST_CLIENT_SECRET,
        redirect_uri: config.ANILIST_REDIRECT_URL,
        code: req.query.code,
      },
    },

    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.render("anilist_success", { access_token: body.access_token });
        // save token to session
        // req.session.token = JSON.parse(body).access_token;

        // redirect to the React app
        // res.redirect(`http://localhost:${config.SERVER_PORT}/user/callback`);
      }
    }
  );
});

module.exports = router;
