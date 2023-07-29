import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import cors, { runMiddleWare } from '../../../utils/cors';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleWare({ req, res, fn: cors });

    const { name, email, message } = req.body;

    const msg = {
        to: `${process.env.SENDGRID_TO}`,
        from: `${process.env.SENDGRID_FROM}`,
        subject: `New Message From your Portfolio from ${name}`,
        text:
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email not sent' });
    }
};
