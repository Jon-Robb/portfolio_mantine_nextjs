import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, message } = req.body;

    const msg = {
        to: 'robinsonjonathan240817@gmail.com',
        // TODO: Make a verified email in sendgrid and update this email
        from: 'update with your own sendgrid mail',
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
