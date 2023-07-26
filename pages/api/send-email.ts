import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { emailValidation } from '../../utils/validation';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message || !emailValidation(email)) return;

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
