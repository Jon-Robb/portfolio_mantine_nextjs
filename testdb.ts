import { connectDB, disconnectDB } from './db/mongoose/connectionHandler';
import PendingTokenModel from './db/mongoose/models/PendingToken';
import VerifiedEmailModel from './db/mongoose/models/VerifiedEmail';

const testData = async () => {
    try {
        await connectDB();
        const newToken = new PendingTokenModel({
            token: 'testToken',
            email: 'testEmail',
        });
        const savedToken = await newToken.save();
        console.log('saved token', savedToken);

        const foundToken = await PendingTokenModel.findOne({ token: 'testToken' });
        console.log('found token', foundToken);

        const verifiedEmail = foundToken?.email;
        if (verifiedEmail) {
            const newEmail = new VerifiedEmailModel({
                email: verifiedEmail,
            });
            const savedEmail = await newEmail.save();
            console.log('saved email', savedEmail);
        }
        const foundVerifiedEmail = await VerifiedEmailModel.findOne({ email: 'testEmail' });
        console.log('found verified email', foundVerifiedEmail);
    } catch (err) {
        console.log(err);
    } finally {
        // await disconnectDB();
    }
};

export default testData;
