import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  feeShip: {
    type: Number,
    required: true,
  },
  productIds: [{
    type: 'ObjectId',
    ref: 'Product',
    required: true,
  }],
  status: {
    type: Number,
    required: true,
  },
  action: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export default OrderSchema;
