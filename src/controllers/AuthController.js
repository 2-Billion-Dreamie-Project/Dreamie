export default class AuthController {
  constructor(UserModel) {
    this.userModel = UserModel;
    this.createUser = this.createUser.bind(this);
    this.register = this.register.bind(this);
  }

  createUser(req, res) {
    const { userName, email, password } = req.body;
    let userModel;

    if (userName && email && password) {
      userModel = this.userModel.createUser(userName, email, password);
      res.status(200).json(userModel);
    } else {
      res.status(400).send('Thông tin đăng ký không hợp lệ');
    }
  }

  register(req, res) {
    res.render('auth/register', {
      csrfToken: req.csrfToken(),
    });
  }

  login(req, res) {
    res.render('auth/login', {
      csrfToken: req.csrfToken(),
    });
  }
}
