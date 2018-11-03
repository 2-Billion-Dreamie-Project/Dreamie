import { User } from '../db';

export default class UserModel {
    constructor() {
        this.UserSchema = User;
        this.createUser = this.createUser.bind(this);
    }

    createUser(userName = '', email = '', password = '') {
        let user;

        try {
            if (userName && email && password) {
                user = new this.UserSchema({ userName, email, password });
                user.password = user.generateHash(user.password);
                
                user.save(function (err, user) {
                    if (err) return console.error(err);
                    return user;
                });

                return user;
            }
        } catch(err) {
            console.log(err);
            return false;
        }
    }
}
