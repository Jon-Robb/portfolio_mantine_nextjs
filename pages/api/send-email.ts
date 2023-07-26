import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import cors, { runMiddleWare } from '../../utils/cors';
import { emailValidation } from '../../utils/validation';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleWare({ req, res, fn: cors });

    const { name, email, message } = req.body;

    if (!name || !email || !message || !emailValidation(email)) return;

    const confirmationMsg = {
        to: email,
        from: `${process.env.SENDGRID_FROM}`,
        subject: `Thank you for contacting me ${name}`,
        text: 'I have received your message and will get back to you as soon as possible.\n\nBest,\n\nJonathan',
    };

    const msg = {
        to: `${process.env.SENDGRID_TO}`,
        from: `${process.env.SENDGRID_FROM}`,
        subject: `New Message From your Portfolio from ${name}`,
        text:
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
        await sgMail.send(confirmationMsg);
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email not sent' });
    }
};
