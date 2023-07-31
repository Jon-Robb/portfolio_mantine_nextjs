import { connectDB, disconnectDB } from '../connectionHandler';
import VerifiedEmail from '../models/VerifiedEmailModel';

export const addVerifiedEmail = async (email: string): Promise<boolean> => {
    console.log(`Email in addVerifiedEmail: ${email}`);
    try {
        await connectDB();
        const newEmail = new VerifiedEmail({
            email,
        });
        const savedEmail = await newEmail.save();
        return !!savedEmail;
    } catch (error) {
        console.error(`Error in addVerifiedEmail: ${error}`);
        return false;
    } finally {
        await disconnectDB();
    }
};

export const isEmailVerified = async (email: string) : Promise<boolean> => {
    console.log(`Email in isEmailVerified: ${email}`);
    try {
        await connectDB();
        const foundEmail = await VerifiedEmail.findOne({ email });
        console.log(`Found email in VerifiedEmailServices: ${foundEmail}`);
        return !!foundEmail;
    } catch (error) {
        console.error(`Error in isEmailVerified: ${error}`);
        return false;
    } finally {
        await disconnectDB();
    }
};
