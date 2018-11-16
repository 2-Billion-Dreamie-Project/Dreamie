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
import PermissionSchema from './Permission';

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
SliderSchema.plugin(autoIncrement.plugin, { model: 'SliderSchema', field: 'id', startAt: 1 });
PartnerSchema.plugin(autoIncrement.plugin, { model: 'PartnerSchema', field: 'id', startAt: 1 });

PostSchema.plugin(autoIncrement.plugin, { model: 'PostSchema', field: 'id', startAt: 1 });
ImageSchema.plugin(autoIncrement.plugin, { model: 'ImageSchema', field: 'id', startAt: 1 });
CategorySchema.plugin(autoIncrement.plugin, { model: 'CategorySchema', field: 'id', startAt: 1 });

CategorySchema.virtual('products', {
  ref: 'Product',
  localField: 'id',
  foreignField: 'cateIds',
  justOne: false,   
});

ProductSchema.plugin(autoIncrement.plugin, { model: 'ProductSchema', field: 'id', startAt: 1 });
OrderSchema.plugin(autoIncrement.plugin, { model: 'OrderSchema', field: 'id', startAt: 1 });
RoleSchema.plugin(autoIncrement.plugin, { model: 'RoleSchema', field: 'id', startAt: 1 });

PermissionSchema.plugin(autoIncrement.plugin, { model: 'PermissionSchema', field: 'id', startAt: 1 });

const User = mongoose.model('User', UserSchema);
const Discount = mongoose.model('DiscountSchema', DiscountSchema);
const Slider = mongoose.model('SliderSchema', SliderSchema);

const Partner = mongoose.model('PartnerSchema', PartnerSchema);
const Post = mongoose.model('PostSchema', PostSchema);
const Image = mongoose.model('ImageSchema', ImageSchema);

const Category = mongoose.model('CategorySchema', CategorySchema);
const Product = mongoose.model('ProductSchema', ProductSchema);
const Order = mongoose.model('OrderSchema', OrderSchema);

const Role = mongoose.model('RoleSchema', RoleSchema);
const Permission = mongoose.model('PermissionSchema', PermissionSchema);


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


