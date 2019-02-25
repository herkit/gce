const express = require('express');
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const path = require('path');

const app = express();

app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', true);

app.use(session({ 
  secret: config.get("SECRET"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(require('./lib/oauth2').router);

app.get("/", (_, res) => res.send("This is the main page"));
app.use(require("./manage/web"));
app.use(require("./embed/web"));
app.get("/settings", (req, res, next) => { res.send("Hello World") });

app.get("/auth/login", (req, res) => {

})

app.use((err, req, res) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;