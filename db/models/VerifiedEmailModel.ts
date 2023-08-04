import mongoose from 'mongoose';
import { EmailEventEmitter } from '../../utils/EmailEventEmitter';
import { EMessages } from '../../typescript/enums/EMessages';

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

export const emailEventEmit = new EmailEventEmitter();

// eslint-disable-next-line prefer-arrow-callback, func-names
EmailSchema.post('save', function (doc) {
    emailEventEmit.emit(EMessages.EMAIL_ADDED, doc.email);
    console.log('%s has been saved', doc.email);
  });

// This is a Singleton like, this that has to be done because of NextJs seemly double compiling
// eslint-disable-next-line import/no-mutable-exports
let VerifiedEmail: mongoose.Model<IEmail>;

if (mongoose.models.VerifiedEmail) {
    VerifiedEmail = mongoose.model('VerifiedEmail');
} else {
    VerifiedEmail = mongoose.model<IEmail>('VerifiedEmail', EmailSchema);
}

export default VerifiedEmail;
