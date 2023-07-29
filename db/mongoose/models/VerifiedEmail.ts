import { Schema, model } from 'mongoose';

interface IEmail {
    email: string;
}

const EmailSchema = new Schema<IEmail>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const VerifiedEmail = model<IEmail>('VerifiedEmail', EmailSchema);

export default VerifiedEmail;
