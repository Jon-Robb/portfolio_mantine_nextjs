import { NextApiRequest, NextApiResponse } from 'next';
import { getEmailByToken } from '../../db/services/PendingTokenServices';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('receive-confirmation endpoint');
    const test = await getEmailByToken(req.query.token as string);
    res.status(200).json({ message: test });
};
