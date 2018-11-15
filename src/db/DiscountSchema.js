import mongoose from 'mongoose';

const DiscountSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    type: {
        type: Number,
        required: true,
    },
    freeShip: {
        type: Boolean,
    },
    saleOff: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

export default DiscountSchema;