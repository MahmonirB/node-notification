const express = require("express");
const router = express.Router();
const Pusher = require("pusher");
const { APPID, KEY, SECRET } = require("../config");

const pusher = new Pusher({
  appId: APPID,
  key: KEY,
  secret: SECRET,
  cluster: "eu",
  useTLS: true,
});

router.get("/pusher", (req, res) => {
  pusher.trigger("my-channel", "my-event", {
    title: "Alert",
    message: "Success show notification in your device.",
  });
});

module.exports = router;
