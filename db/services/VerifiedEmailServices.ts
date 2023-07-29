import VerifiedEmail from '../models/VerifiedEmailModel';

export const addVerifiedEmail = async (email: string) => {
    const newEmail = new VerifiedEmail({
        email,
    });
    const savedEmail = await newEmail.save();
    return savedEmail;
};

export const isEmailVerified = async (email: string) => {
    const foundEmail = await VerifiedEmail.findOne({ email });
    return foundEmail;
};
