import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';
import cors, { runMiddleWare } from '../../../utils/cors';
import { emailValidation } from '../../../utils/validation';
import { addToken } from '../../../db/services/PendingTokenServices';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await runMiddleWare({ req, res, fn: cors });

        const { name, email } = req.body;
        if (!emailValidation(email)) {
            res.status(400).json({ error: 'Invalid email' });
            return;
        }

        const token = uuidv4();
        await addToken(token, email);

        const confirmationMsg = {
            to: email,
            from: `${process.env.SENDGRID_FROM}`,
            subject: `Hello ${name}, please confirm your email by clicking the link below. Thank you for contacting me.`,
            text:
                `Hello ${name},\n\nThank you for contacting me. Please confirm your email by clicking the link below.\n\n${process.env.NEXT_PUBLIC_URL}/api/receive-confirmation?token=${token}\n\nThank you,\n\n${process.env.SENDGRID_FROM_NAME}`,
        };

        try {
            await sgMail.send(confirmationMsg);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Email not sent' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in the send-confirmation endpoint' });
    }
};
