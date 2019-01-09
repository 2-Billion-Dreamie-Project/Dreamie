import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
      type: String,
    },
    // image: [{
    //     type: 'ObjectId',
    //     ref: 'Image',
    //     required: true,
    // }],
}, {
    timestamps: true,
});

export default PartnerSchema;
