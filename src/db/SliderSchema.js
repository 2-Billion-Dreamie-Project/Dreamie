import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema({
    images: [{
        type: 'ObjectId',
        ref: 'Image',
        required: true,
    }],
}, {
    timestamps: true,
});

export default SliderSchema;
