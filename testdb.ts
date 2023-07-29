import { connectDB, disconnectDB } from './db/mongoose/connectionHandler';
import PendingToken from './db/mongoose/models/PendingToken';
import VerifiedEmail from './db/mongoose/models/VerifiedEmail';

const testData = async () => {
    try {
        await connectDB();
        const newToken = new PendingToken({
            token: 'testToken',
            email: 'testEmail',
        });
        const savedToken = await newToken.save();
        console.log('saved token', savedToken);

        const foundToken = await PendingToken.findOne({ token: 'testToken' });
        console.log('found token', foundToken);

        const verifiedEmail = foundToken?.email;
        if (verifiedEmail) {
            const newEmail = new VerifiedEmail({
                email: verifiedEmail,
            });
            const savedEmail = await newEmail.save();
            console.log('saved email', savedEmail);
        }
        const foundVerifiedEmail = await VerifiedEmail.findOne({ email: 'testEmail' });
        console.log('found verified email', foundVerifiedEmail);
    } catch (err) {
        console.log(err);
    } finally {
        await disconnectDB();
    }
};

testData();
