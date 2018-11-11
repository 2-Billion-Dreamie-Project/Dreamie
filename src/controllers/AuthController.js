export default class AuthController {
  constructor(UserModel) {
    this.userModel = UserModel;
    this.createUser = this.createUser.bind(this);
    this.register = this.register.bind(this);
  }

  createUser(req, res) {
    const { userName, email, password } = req.body;
    this.userModel.createUser(userName, email, password);
    res.redirect('/auth/login')
  }

  register(req, res) {
    res.render('auth/register', {
      csrfToken: req.csrfToken(),
    });
  }

  login(req, res) {
    let { error, unAuthentication } = req.flash();
    error = error ? error[0]: '';
    unAuthentication = unAuthentication ? unAuthentication[0]: '';
 
    res.render('auth/login', {
      csrfToken: req.csrfToken(),
      error,
      unAuthentication
    });
  }

  logout(req, res) {
    req.logout();
    res.redirect('/');
  }
}
