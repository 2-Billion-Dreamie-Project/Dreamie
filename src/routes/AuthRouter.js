import express from 'express';

const AuthRouter = express.Router();

AuthRouter.get('/register', function(req, res) {
    res.render('auth/register', { 
        csrfToken: req.csrfToken(),
    });
});

AuthRouter.post('/register', function(req, res) {
    res.json(res.body)
});

export default AuthRouter;
