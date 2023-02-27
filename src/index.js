const express = require("express");
const cors = require("cors");
const session = require("express-session");
const config = require("../config");
var path = require ('path');

const userRouter = require("./routes/github_oauth/user");
const loginRouter = require("./routes/anilist_oauth/login");
const pusherRouter = require("./routes/pusher");
const oAuthCallbackRouter = require("./routes/anilist_oauth/oauth-callback");
const successRouter = require("./routes/result_oauth/success");

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();
app.use(express.json());

// configure CORS
app.use(cors());

// Set 'views' directory for any views 
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.set('view engine', 'ejs');

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

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
app.use("/success", successRouter);

// start server
app.listen(config.SERVER_PORT, () =>
  console.log(`Anime app listening on port ${config.SERVER_PORT}.`)
);
