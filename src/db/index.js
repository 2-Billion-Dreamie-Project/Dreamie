require('dotenv').config();

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';

import UserSchema from './UserSchema';
import { BCRYPT_SALT } from '../global/common';

let DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://localhost:27017/mongoose';

if (process.env.NODE_ENV === 'test') {
  DB_CONNECTION = process.env.DB_TEST || 'mongodb://localhost:27010/mongoose';
}

mongoose.connect(DB_CONNECTION, { 
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

UserSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'id', startAt: 1 });

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, BCRYPT_SALT);
}

const User = mongoose.model('User', UserSchema);

export {
  User
}


