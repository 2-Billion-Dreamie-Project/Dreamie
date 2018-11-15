import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';

import UserSchema from './UserSchema';
import DiscountSchema from './DiscountSchema';
import { BCRYPT_SALT } from '../global/common';

mongoose.connect(
  process.env.DB_CONNECTIONSS || 'mongodb://localhost:27017/mongoose', 
  { 
    useNewUrlParser: true,
    autoIndex: false,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose connected success!');
});

autoIncrement.initialize(db);

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id', startAt: 1 });

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, BCRYPT_SALT);
}

DiscountSchema.plugin(autoIncrement.plugin, { model: 'DiscountSchema', field: 'id', startAt: 1 });

const User = mongoose.model('User', UserSchema);
const Discount = mongoose.model('DiscountSchema', DiscountSchema);


export {
  User,
  Discount
}


