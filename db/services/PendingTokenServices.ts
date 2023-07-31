import PendingToken from '../models/PendingTokenModel';

export const addToken = async (token: string, email: string):Promise<boolean> => {
    const newToken = new PendingToken({
        token,
        email,
    });
    const savedToken = await newToken.save();
    return !!savedToken;
};

export const getEmailByToken = async (token: string) : Promise<boolean> => {
    const foundToken = await PendingToken.findOne({ token });
    return !!foundToken;
};

export const deleteToken = async (token: string): Promise<boolean> => {
    const deletedToken = await PendingToken.deleteOne({ token });
    return !!deletedToken;
};

export const isPendingToken = async (email: string): Promise<boolean> => {
    const foundEmail = await PendingToken.findOne({ email });
    return !!foundEmail;
};
