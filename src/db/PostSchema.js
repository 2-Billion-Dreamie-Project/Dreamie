import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    featImage: {
        type: 'ObjectId',
        ref: 'Image',
        required: true,
    },
    detail: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export default PostSchema;
