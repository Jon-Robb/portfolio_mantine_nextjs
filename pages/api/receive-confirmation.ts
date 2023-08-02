import { NextApiRequest, NextApiResponse } from 'next';
import { getEmailAndDeleteToken } from '../../db/services/PendingTokenServices';
import { addVerifiedEmail } from '../../db/services/VerifiedEmailServices';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('receive-confirmation endpoint');
    try {
        const token = req.query.token as string;
        const foundEmail = await getEmailAndDeleteToken(token);
        if (!foundEmail) {
            res.status(404).json({ error: 'Token not found or expired. Please request a new confirmation email.' });
            return;
        }
        const isAdded = await addVerifiedEmail(foundEmail);
        if (!isAdded) {
            res.status(500).json({ error: 'Could not add address to database' });
            return;
        }
        res.status(200).json({ message: 'Email verified, you can close this window' });
    } catch (error) {
        console.error('Token outdated or other error:', error);
        res.status(500).json({ error: 'Error in the receive-confirmation endpoint' });
    }
};
