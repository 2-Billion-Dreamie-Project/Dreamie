import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    images: [{
        type: 'ObjectId',
        ref: 'Image',
        required: true,
    }],
    detail: {
        type: String,
        required: true,
    },
    quantityBuy: {
        type: String,
        required: true,
    },
    featureProduct: {
        type: Boolean,
    },
    superProduct: {
        type: Boolean,
        unique: true,
    },
    cateIds: [{
        type: 'ObjectId',
        ref: 'Category',
        required: true,
    }],
    quantity: {
        type: Number,
    },
    status: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default ProductSchema;
