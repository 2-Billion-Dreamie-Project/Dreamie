require('dotenv').config();

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';

import UserSchema from './UserSchema';
import DiscountSchema from './DiscountSchema';
import SliderSchema from './SliderSchema';

import PartnerSchema from './PartnerSchema';
import PostSchema from './PostSchema';
import ImageSchema from './ImageSchema';

import CategorySchema from './CategorySchema';
import ProductSchema from './ProductSchema';
import OrderSchema from './OrderSchema';

import RoleSchema from './RoleSchema';
import PermissionSchema from './PermissionSchema';

import { BCRYPT_SALT } from '../global/common';

let conn = process.env.DB_DEV || 'mongodb://localhost:27017/mongoose';

if (process.env.NODE_ENV === 'test') {
  conn = process.env.DB_TEST || 'mongodb://localhost:27010/mongoose';
} else if(process.env.NODE_ENV === 'production') {

}

mongoose.connect(conn, { 
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

DiscountSchema.plugin(autoIncrement.plugin, { model: 'Discount', field: 'id', startAt: 1 });
SliderSchema.plugin(autoIncrement.plugin, { model: 'Slider', field: 'id', startAt: 1 });
PartnerSchema.plugin(autoIncrement.plugin, { model: 'Partner', field: 'id', startAt: 1 });

PostSchema.plugin(autoIncrement.plugin, { model: 'Post', field: 'id', startAt: 1 });
ImageSchema.plugin(autoIncrement.plugin, { model: 'Image', field: 'id', startAt: 1 });
CategorySchema.plugin(autoIncrement.plugin, { model: 'Category', field: 'id', startAt: 1 });

CategorySchema.virtual('parentCategory', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'childCategoryIds',
  justOne: false,   
});


CategorySchema.virtual('products', {
  ref: 'Product',
  localField: 'id',
  foreignField: 'cateIds',
  justOne: false,   
});

ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'id', startAt: 1 });
OrderSchema.plugin(autoIncrement.plugin, { model: 'Order', field: 'id', startAt: 1 });
RoleSchema.plugin(autoIncrement.plugin, { model: 'Role', field: 'id', startAt: 1 });

PermissionSchema.plugin(autoIncrement.plugin, { model: 'Permission', field: 'id', startAt: 1 });

const User = mongoose.model('User', UserSchema);
const Discount = mongoose.model('Discount', DiscountSchema);
const Slider = mongoose.model('Slider', SliderSchema);

const Partner = mongoose.model('Partner', PartnerSchema);
const Post = mongoose.model('Post', PostSchema);
const Image = mongoose.model('Image', ImageSchema);

const Category = mongoose.model('Category', CategorySchema);
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);

const Role = mongoose.model('Role', RoleSchema);
const Permission = mongoose.model('Permission', PermissionSchema);


export {
  User,
  Discount,
  Slider,
  Partner,
  Post,
  Image,
  Category,
  Product,
  Order,
  Role,
  Permission
}


