require('dotenv').config();
import path from 'path';

import express from 'express';
import * as routers from './src/routes';
import bodyParser from 'body-parser';

import compression from 'compression';
import session from 'express-session';
import csurf from 'csurf';

import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "src/views"));

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(compression()); // compress all responses

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));
app.use(csurf({ cookie: true }));

app.use('/auth', routers.AuthRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
