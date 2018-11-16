import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema({
    images: {
        type: [ID],
        required: true,
    },
}, {
    timestamps: true,
});

export default SliderSchema;