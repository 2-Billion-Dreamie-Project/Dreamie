import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema({
    // images: [{
    //     type: 'ObjectId',
    //     ref: 'Image',
    //     required: true,
    // }],
    name: {
      type: String,
    },
    image: {
      type: String,
    },
}, {
    timestamps: true,
});

export default SliderSchema;
