import { connectDB, disconnectDB } from '../../db/mongoose/connectionHandler';
import PendingToken from '../../db/mongoose/models/PendingToken';
import VerifiedEmail from '../../db/mongoose/models/VerifiedEmail';

export default async function testDB(req: any, res:any) {
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

        res.status(200).json({ message: 'DB tests completed' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        await disconnectDB();
    }
}
