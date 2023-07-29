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

const EmailModel = model<IEmail>('Email', EmailSchema);

export default EmailModel;
