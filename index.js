require('dotenv').config();

import express from 'express';
import routers from './src/routes';
import bodyParser from 'body-parser';

import compression from 'compression';
import session from 'express-session';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(compression()); // compress all responses

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use('/', routers);

app.listen(port, () => console.log(`App listening on port ${port}!`));