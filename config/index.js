const dotenv = require('dotenv');
dotenv.config();

const APPID = process.env.PUSHER_APP_ID;
const KEY = process.env.PUSHER_KEY;
const SECRET = process.env.PUSHER_SECRET;

module.exports = { APPID, KEY, SECRET }