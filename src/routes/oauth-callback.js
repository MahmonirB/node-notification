const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../../config");

router.get("/", (req, res) => {
  // console.log({
  //   grant_type: 'authorization_code',
  //   client_id: config.CLIENT_ID,
  //   client_secret: config.CLIENT_SECRET,
  //   redirect_uri: `http://localhost:${config.SERVER_PORT}/user/callback`,
  //   code: req.query.code,
  // });

  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: "https://anilist.co/api/v2/oauth/token",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      json: {
        grant_type: 'authorization_code',
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        redirect_uri: `http://localhost:${config.SERVER_PORT}/user/callback`,
        code: req.query.code,
      },
    },

    (error, response, body) => {
      console.log(response)
      if (!error && response.statusCode == 200) {
        console.log(body.access_token);
      
      // save token to session
      // req.session.token = JSON.parse(body).access_token;

      // redirect to the React app
      // res.redirect(`http://localhost:${config.SERVER_PORT}/user/callback`);
      }
    }
  );
});

module.exports = router;
