import mongoose from 'mongoose';

interface IEmail {
    email: string;
}

const EmailSchema = new mongoose.Schema<IEmail>({
    email: {
        type: String,
        required: true,
        unique: true,
        // 6 months expiration
        expires: 15552000,
    },
});

// eslint-disable-next-line import/no-mutable-exports
let VerifiedEmail: mongoose.Model<IEmail>;

if (mongoose.models.VerifiedEmail) {
    VerifiedEmail = mongoose.model('VerifiedEmail');
} else {
    VerifiedEmail = mongoose.model<IEmail>('VerifiedEmail', EmailSchema);
}

export default VerifiedEmail;