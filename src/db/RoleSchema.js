import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    permIds: [{
        type: 'ObjectId',
        ref: 'Permission',
        required: true,
    }],
    status: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default RoleSchema;
