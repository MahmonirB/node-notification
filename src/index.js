const express = require("express");
const cors = require("cors");
const session = require("express-session");
const config = require("../config");

const userRouter = require("../routes/user");
const loginRouter = require("../routes/login");
const pusherRouter = require("../routes/pusher");
const oAuthCallbackRouter = require("../routes/oauth-callback");

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();
app.use(express.json());

// configure CORS
app.use(cors());

// configure sessions
app.use(
  session({
    secret: "1234567890",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "auto",
      httpOnly: true,
      maxAge: 3600000,
    },
  })
);

// use routes
app.use("/user", userRouter);
app.use("/pusher", pusherRouter);
app.use("/login", loginRouter);
app.use("/oauth-callback", oAuthCallbackRouter);

// start server
app.listen(config.SERVER_PORT, () =>
  console.log(`Anime app listening on port ${config.SERVER_PORT}.`)
);
