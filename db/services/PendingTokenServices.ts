import PendingToken from '../models/PendingTokenModel';

export const addToken = async (token: string, email: string) => {
    const newToken = new PendingToken({
        token,
        email,
    });
    await newToken.save();
};

export const getEmailByToken = async (token: string) => {
    const foundToken = await PendingToken.findOne({ token });
    return foundToken?.email;
};
