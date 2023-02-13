const Pusher = require("pusher");
const { APPID, KEY, SECRET } = require("../config/index");

const pusher = new Pusher({
  appId: APPID,
  key: KEY,
  secret: SECRET,
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  title: 'Alert',
  message: 'Success show notification in your device.',
});