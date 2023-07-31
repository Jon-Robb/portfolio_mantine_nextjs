import { withDBConnection } from '../connectionHandler';
import VerifiedEmail from '../models/VerifiedEmailModel';

export const addVerifiedEmail = async (email: string): Promise<boolean> => {
    console.log(`Email in addVerifiedEmail: ${email}`);
    return withDBConnection(async () => {
        const newEmail = new VerifiedEmail({ email });
        const savedEmail = await newEmail.save();
        return !!savedEmail;
    });
};

export const isEmailVerified = async (email: string) : Promise<boolean> => {
    console.log(`Email in isEmailVerified: ${email}`);
    return withDBConnection(async () => {
        const foundEmail = await VerifiedEmail.findOne({ email });
        return !!foundEmail;
    });
};
