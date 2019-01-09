import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    thumbNail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    desc: {
        type: String,
    },
    ext: {
        type: String,
    },
    size: {
        type: Number,
    },
    height: {
        type: Number,
    },
    width: {
        type: Number,
    },
    mainMode: {
        type: Boolean,
    },
}, {
    timestamps: true,    
});

export default MediaSchema;
