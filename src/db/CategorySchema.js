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
  childCategoryIds: [{
    type: 'ObjectId',
    ref: 'Category',
  }],
  homeMode: {
    type: Boolean,
  },
  status: {
    type: Number,
  },
  isParent: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

export default CategorySchema;
