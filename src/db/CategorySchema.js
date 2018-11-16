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
    parentId: {
        type: 'ObjectId',
    },
    homeMode: {
        type: Boolean,
    },
    status: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default CategorySchema;