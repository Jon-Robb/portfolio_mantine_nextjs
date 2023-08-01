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
        return foundToken ? foundToken.email : null;
    });

export const deleteToken = (token: string): Promise<boolean> =>
    withDBConnection(async () => {
        const { deletedCount } = await PendingToken.deleteOne({ token });
        return deletedCount > 0;
    });

export const isPendingToken = (email: string): Promise<boolean> =>
    withDBConnection(async () => {
        const foundEmail = await PendingToken.findOne({ email });
        return !!foundEmail;
    });

export const getEmailAndDeleteToken = (token: string): Promise<string> =>
    withDBConnection(async () => {
        const foundToken = await PendingToken.findByIdAndDelete({ token });
        return foundToken ? foundToken.email : null;
    });
