require('dotenv').config();
import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import passportConfig from './middlewares/passportConfig';

import compression from 'compression';
import session from 'express-session';
import csurf from 'csurf';

import cookieParser from 'cookie-parser';
import passport from 'passport';
import Strategy from 'passport-local';

import flash from 'connect-flash';
import connectMongo from 'connect-mongo';
import routes from './routes';

import timeout from 'connect-timeout';

const app = express();

const port = process.env.PORT || 3000;
const LocalStrategy = Strategy.Strategy;
const MongoStore = connectMongo(session);

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "./views"));

app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// Configuration passport
passportConfig(passport, LocalStrategy);

// Configuration timeout
app.use(timeout('120s'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json()); 
// compress all responses
app.use(compression()); 

app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MongoStore({
    url: process.env.DB_CONNECTION || 'mongodb://localhost:27017/mongoose',
  }),
}));

// Flash message session
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Configuration Routers
routes(app, passport);


app.use(function(err, req, res, next) {
  if (err && process.env.NODE_ENV === 'production') {
    res.status(500).send('Error');
  }
});

// error handler 404
app.use(function (req, res, next) {
  res.status(404).send("404 Sorry can't find that!")
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

export default app;
