import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { memoryDatabase } from './send-email';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.query;
    console.log('recveived token', token);
    console.log('memoryDatabase', memoryDatabase);
    if (typeof token === 'string' && memoryDatabase[token]) {
        memoryDatabase[token].confirmed = true;

        const { name, email, message } = memoryDatabase[token];
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
    } else {
        res.status(400).json({ error: 'Invalid token' });
    }
};
