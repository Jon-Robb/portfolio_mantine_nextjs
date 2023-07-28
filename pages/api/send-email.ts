import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';
import cors, { runMiddleWare } from '../../utils/cors';
import { emailValidation } from '../../utils/validation';

interface UserDatabase {
    [key: string]: {
        name: string;
        email: string;
        message:string;
        confirmed: boolean;
    };
}

export const memoryDatabase:UserDatabase = {};

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleWare({ req, res, fn: cors });

    const { name, email, message } = req.body;

    if (!name || !email || !message || !emailValidation(email)) return;

    const token = uuidv4();
    console.log('generated token', token);
    memoryDatabase[token] = { name, email, message, confirmed: false };
    console.log('memoryDatabase[token]', memoryDatabase[token]);
    const confirmationMsg = {
        to: email,
        from: `${process.env.SENDGRID_FROM}`,
        subject: `Hello ${name}, please confirm your email by clicking the link below. Thank you for contacting me.`,
        text:
        `Hello ${name},\n\nThank you for contacting me. Please confirm your email by clicking the link below.\n\n${process.env.NEXT_PUBLIC_URL}/api/confirm-email?token=${token}\n\nThank you,\n\n${process.env.SENDGRID_FROM_NAME}`,
    };

    // const msg = {
    //     to: `${process.env.SENDGRID_TO}`,
    //     from: `${process.env.SENDGRID_FROM}`,
    //     subject: `New Message From your Portfolio from ${name}`,
    //     text:
    //         `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // };
    try {
        await sgMail.send(confirmationMsg);
        // await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email not sent' });
    }
};
