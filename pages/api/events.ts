import { NextApiRequest, NextApiResponse } from 'next';
import cors, { runMiddleWare } from '../../utils/cors';
import { EMessages } from '../../typescript/enums/EMessages';
import { emailEventEmit } from '../../db/models/VerifiedEmailModel';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('events endpoint');
    try {
        await runMiddleWare({ req, res, fn: cors });
        console.log('events data', req.body);
        emailEventEmit.emit(EMessages.EMAIL_ADDED, req.body.email);
        res.status(200).json({ message: EMessages.EMAIL_ADDED });
    } catch (error) {
        res.status(500).json({ error: 'Error in the events endpoint' });
    }
};
