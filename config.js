const dotenv = require('dotenv');
dotenv.config();

const APPID = process.env.PUSHER_APP_ID;
const KEY = process.env.PUSHER_KEY;
const SECRET = process.env.PUSHER_SECRET;

const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_PORT = process.env.CLIENT_PORT;


module.exports = { APPID, KEY, SECRET }