import mongoose from 'mongoose';

const PermissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default PermissionSchema;