import UserModel from '../../models/UserModel';

/**
 * @class AuthController
 * @author ChungNQ
 * @version 1.0
 * @since 16/11/2018
 * @description 
 * The AuthController handle actions by user
 */
export default class AuthController {
  constructor() {
    this.userModel = new UserModel;
    this.createUser = this.createUser.bind(this);
    this.register = this.register.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  /**
   * @memberof AuthController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Create user success and redidirect to page login
   */
  async createUser(req, res) {
    // console.log(req.body);
    const { userName, email, password } = req.body;
    const user = await this.userModel.createUser(userName, email, password);
    res.json(user);
    // res.redirect('/auth/login')
  }

  /**
   * @memberof AuthController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view register
   */
  register(req, res) {
    res.render('auth/register', {
      csrfToken: req.csrfToken(),
    });
  }

  /**
   * @memberof AuthController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Render view login
   * @description 
   * If error show message error 
   */
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

  /**
   * @memberof AuthController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Logout to home page
   */
  logout(req, res) {
    req.logout();
    res.redirect('/');
  }

  async getUsers(req, res) {
    let { search, page } = req.query;
    let queryUser = {};
    let skip = (page - 1) * 10;
    console.log(skip);

    if (search && search !== '') {
      queryUser = { userName: new RegExp(search, 'i') }
    }

    let listUsers = await this.userModel.getUsers(queryUser, skip);
    res.status(200).json(listUsers);

  }
}
