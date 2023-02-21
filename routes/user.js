const express = require("express");
const router = express.Router();
const config = require("../config");

router.get("/", (req, res) => {
  res.status(200).send({
    user: {
      email: req.body.email,
    },
  });
});

module.exports = router;
