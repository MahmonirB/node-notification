const dotenv = require("dotenv");
dotenv.config();

const APPID = process.env.PUSHER_APP_ID;
const KEY = process.env.PUSHER_KEY;
const SECRET = process.env.PUSHER_SECRET;

const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_PORT = process.env.CLIENT_PORT;

const ANILIST_CLIENT_ID = process.env.ANILIST_CLIENT_ID;
const ANILIST_CLIENT_SECRET = process.env.ANILIST_CLIENT_SECRET;
const ANILIST_REDIRECT_URL = process.env.ANILIST_REDIRECT_URL;

module.exports = {
  APPID,
  KEY,
  SECRET,
  SERVER_PORT,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  CLIENT_PORT,
  ANILIST_CLIENT_ID,
  ANILIST_CLIENT_SECRET,
  ANILIST_REDIRECT_URL
};
