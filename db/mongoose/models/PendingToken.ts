import mongoose from 'mongoose';

interface IPendingToken {
    token: string;
    email: string;
    createdAt: Date;
}

const PendingTokenSchema = new mongoose.Schema<IPendingToken>({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        expires: 300,
        default: Date.now,
    },
});

const PendingToken = mongoose.model<IPendingToken>('PendingToken', PendingTokenSchema);

export default PendingToken;
