import { NextApiRequest, NextApiResponse } from 'next';
import cors, { runMiddleWare } from '../../../utils/cors';
import { isEmailVerified } from '../../../db/services/VerifiedEmailServices';
import { isPendingToken } from '../../../db/services/PendingTokenServices';
import { EMessages } from '../../../typescript/enums/EMessages';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('check-email endpoint');
    try {
        await runMiddleWare({ req, res, fn: cors });

        const { email } = req.body;
        const isVerified = await isEmailVerified(email);
        console.log(`isVerified in check-email endpoint: ${isVerified}`);
        if (isVerified) {
            res.status(200).json({ message: EMessages.EMAIL_VERIFIED });
            return;
        }
        const isPending = await isPendingToken(email);
        if (isPending) {
            res.status(202).json({ message: EMessages.EMAIL_PENDING });
            return;
        }
        res.status(200).json({ message: EMessages.EMAIL_NOT_FOUND });
    } catch (error) {
        res.status(500).json({ error: 'Error in the check-emails endpoint' });
    }
};
