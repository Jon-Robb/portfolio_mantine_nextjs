import { withDBConnection } from '../connectionHandler';
import PendingToken from '../models/PendingTokenModel';

export const addToken = (token: string, email: string): Promise<boolean> =>
    withDBConnection(async () => {
        const newToken = new PendingToken({
            token,
            email,
        });
        const savedToken = await newToken.save();
        return !!savedToken;
    });

export const getEmailByToken = (token: string): Promise<boolean> =>
    withDBConnection(async () => {
        const foundToken = await PendingToken.findOne({ token });
        return !!foundToken;
    });

export const deleteToken = (token: string): Promise<boolean> =>
    withDBConnection(async () => {
        const deletedToken = await PendingToken.deleteOne({ token });
        return !!deletedToken;
    });

export const isPendingToken = (email: string): Promise<boolean> =>
    withDBConnection(async () => {
        const foundEmail = await PendingToken.findOne({ email });
        return !!foundEmail;
    });
