import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';

import UserSchema from './UserSchema';
import { BCRYPT_SALT } from '../global/common';

mongoose.connect(process.env.DB_CONNECTIONSS || 'mongodb://localhost:27017/mongoose', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose connected success!');
});

autoIncrement.initialize(db);

UserSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'id', startAt: 1 });
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, BCRYPT_SALT);
}

const User = mongoose.model('User', UserSchema, { autoIndex: false });

export {
  User
}


