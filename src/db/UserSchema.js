import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true, 
    lowercase: true, 
    trim: true, 
    required: true, 
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  roleIds: {
    type: 'ObjectId',
    ref: 'Role',
    required: true,
    unique: true,
  },
}, {
    timestamps: true,
});

export default UserSchema;
