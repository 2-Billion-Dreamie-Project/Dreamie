require('dotenv').config();
import path from 'path';
import { User } from './src/db';

import express from 'express';
import * as routers from './src/routes';
import bodyParser from 'body-parser';

import compression from 'compression';
import session from 'express-session';
import csurf from 'csurf';

import cookieParser from 'cookie-parser';
import passport from 'passport';
import Strategy from 'passport-local';

import flash from 'connect-flash';
import ensureLoggedIn from 'connect-ensure-login';

const app = express();
const port = process.env.PORT || 3000;
const LocalStrategy = Strategy.Strategy;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "src/views"));

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {
        User.findOne({ email }, function(err, user) {
            if (err) { return done(err); }

            if (!user) { 
                return done(null, false, { message: 'Incorrect email.' });
            }

            if (!user.comparePassword(password)) { 
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        });
    })
);

passport.serializeUser(function(user, done) {
    console.log('serializeUser');
    done(null, 1);
});
  
passport.deserializeUser(function(id, done) {
    console.log('deserializeUser');
    done(null, 2);
});

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

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// error handler CSRF
app.use(function (err, req, res, next) { 
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
  
    // handle CSRF token errors here
    res.status(403)
    res.send('form tampered with')
});

// app.use('/auth', routers.AuthRouter);

app.get('/login', function(req, res) {
    console.log(req.flash());
    res.render('auth/login', { 
        csrfToken: req.csrfToken(),
    });
});

app.post('/login', 
    passport
        .authenticate(
            'local', 
            { 
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: 'Sai email hoặc mật khẩu!'
            },
        )
);

app.get('/', ensureLoggedIn.ensureLoggedIn('/login'), function(req, res) {
    res.status(200).send('Pong!');
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
