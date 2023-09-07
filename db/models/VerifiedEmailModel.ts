import mongoose, { Document, Model } from 'mongoose';

interface IEmail extends Document {
    email: string;
    createdAt: Date;
}

const EmailSchema = new mongoose.Schema<IEmail>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // 6 months expiration
        expires: 60 * 60 * 24 * 180,
    },
});

// This is a Singleton like, this that has to be done because of NextJs seemly double compiling
// eslint-disable-next-line import/no-mutable-exports
// let VerifiedEmail: mongoose.Model<IEmail>;

// if (mongoose.models.VerifiedEmail) {
//     VerifiedEmail = mongoose.model('VerifiedEmail');
// } else {
//     VerifiedEmail = mongoose.model<IEmail>('VerifiedEmail', EmailSchema);
// }

const VerifiedEmail: Model<IEmail> = mongoose.model<IEmail>('VerifiedEmail', EmailSchema);

export default VerifiedEmail;
