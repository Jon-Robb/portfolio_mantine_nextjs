import mongoose, { Document, Model } from 'mongoose';

interface IPendingToken extends Document {
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
        default: Date.now,
    },
});

PendingTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

// eslint-disable-next-line import/no-mutable-exports
// let PendingToken: mongoose.Model<IPendingToken>;

// if (mongoose.models.PendingToken) {
//   PendingToken = mongoose.model('PendingToken');
// } else {
//   PendingToken = mongoose.model<IPendingToken>('PendingToken', PendingTokenSchema);
// }

const PendingToken: Model<IPendingToken> = mongoose.model<IPendingToken>('PendingToken', PendingTokenSchema);

export default PendingToken;
