class AuthController {
    createUser(req, res) {

    }

    register(req, res) {
        res.render('auth/register', { 
            csrfToken: req.csrfToken(),
        });
    }
}

export default AuthController;
