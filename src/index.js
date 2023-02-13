const Pusher = require("pusher");
const dotenv = require('dotenv');
dotenv.config();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  title: 'Alert',
  message: 'Success show notification in your device.',
});