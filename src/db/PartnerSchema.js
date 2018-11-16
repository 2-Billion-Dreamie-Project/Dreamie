import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: [ID],
        required: true,
    },
}, {
    timestamps: true,
});

export default PartnerSchema;