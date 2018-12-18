import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  homeMode: {
    type: Boolean,
  },
  status: {
    type: Number,
  },
  parentId: {
    type: 'ObjectId',
  },
  isParent: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

export default CategorySchema;
