import { User } from '../db';

/**
 * @class UserModel
 * @author ChungNQ
 * @version 1.0
 * @since 16/11/2018
 * @requires User
 * @description 
 * The UserModel handle data by user
 */
export default class UserModel {
  constructor() {
    this.userSchema = User;
    this.createUser = this.createUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  /**
   * @memberof UserModel#
   * @param {String} userName - this param is required
   * @param {String} email - this param is required
   * @param {String} password - this param is required 
   * @returns {Object} Return user is object type
   */
  createUser(
    userName = '', 
    email = '', 
    password = '',
  ) {
    let user;
    try {
      if (
        userName !== ''
        && email !== ''
        && password !== ''
        ) {
        user = new this.userSchema({ userName, email, password });
        user.password = user.generateHash(user.password);

        user.save(function (err, user) {
          if (err) return console.log(err);
          return user;
        });

        return user;
      }
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  getUsers() {
    try {
      return this.userSchema.find({});
    } catch(err) {
      console.log(err);
      return false;
    }
  }
}
