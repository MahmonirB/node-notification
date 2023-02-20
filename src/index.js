const express = require('express');
const config = require('../config');

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();
app.use(express.json());

// use routes
app.use('/user', require('./routes/user'));
app.use('/pusher', require('./routes/pusher'));
app.use('/login', require('./routes/login'));
app.use('/oauth-callback', require('./routes/oauth-callback'));

// start server
app.listen(config.SERVER_PORT, () => console.log(`FusionAuth example app listening on port ${config.SERVER_PORT}.`));