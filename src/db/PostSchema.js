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
        type: ID,
        required: true,
    },
    detail: {
        type: ID,
        required: true,
    }
}, {
    timestamps: true,
});

export default PostSchema;