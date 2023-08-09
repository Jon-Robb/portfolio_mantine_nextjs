import { withDBConnection } from '../connectionHandler';
import VerifiedEmail from '../models/VerifiedEmailModel';
import { isSameDay } from '../../utils/date';

export const addVerifiedEmail = async (email: string): Promise<boolean> =>
    withDBConnection(async () => {
        const newEmail = new VerifiedEmail({ email });
        const savedEmail = await newEmail.save();
        return !!savedEmail;
    });

export const isEmailVerified = async (email: string) : Promise<boolean> =>
    withDBConnection(async () => {
        const foundEmail = await VerifiedEmail.findOne({ email });
        return !!foundEmail;
    });

export const updateExpirationDate = async (email: string): Promise<boolean> => {
    console.log(`Email in updateExpirationDate: ${email}`);
    return withDBConnection(async () => {
        const foundEmail = await VerifiedEmail.findOne({ email });
        if (!foundEmail) return false;
        const now = new Date();
        const creationDate = new Date(foundEmail.createdAt);
        if (isSameDay(now, creationDate)) return true;
        const updatedEmail = await VerifiedEmail.findOneAndUpdate(
            { email }, { createdAt: now }, { new: true },
        );
        return !!updatedEmail;
    });
};
