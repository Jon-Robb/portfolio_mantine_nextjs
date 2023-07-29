import { Schema, model } from 'mongoose';

interface IPendingToken {
    token: string;
    email: string;
    createdAt: Date;
}

const PendingTokenSchema = new Schema<IPendingToken>({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 300,
        default: Date.now,
    },
});

const PendingTokenModel = model<IPendingToken>('PendingToken', PendingTokenSchema);

export default PendingTokenModel;
