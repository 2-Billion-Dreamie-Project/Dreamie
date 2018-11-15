import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,  //duy nhất
    lowercase: true, // viết thường
    trim: true, // không có khoảng trắng
    required: true, // bắt buộc
  },
  password: {
    type: String,
    required: true,
  },
}, {
    timestamps: true,
});

export default UserSchema;
