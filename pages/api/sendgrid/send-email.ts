import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import i18nBackend from '../../../i18n/i18nBackend';
import { updateExpirationDate } from '../../../db/services/VerifiedEmailServices';
import cors, { runMiddleWare } from '../../../utils/cors';
import { EMessages } from '../../../typescript/enums/EMessages';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleWare({ req, res, fn: cors });

    const { name, email, message, language } = req.body;

    i18nBackend.changeLanguage(language);

    const isEmailUpdated = await updateExpirationDate(email);
    if (!isEmailUpdated) {
        res.status(400).json({ error: 'Email not updated' });
        return;
    }

    const msg = {
        to: `${process.env.SENDGRID_TO}`,
        from: `${process.env.SENDGRID_FROM}`,
        subject: `New Message From your Portfolio from ${name}`,
        text:
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const thankYouMsg = {
        to: `${email}`,
        from: `${process.env.SENDGRID_FROM}`,
        subject: i18nBackend.t('thankyouEmail.subject', { name }),
        text: i18nBackend.t('thankyouEmail.text', { name }),
    };

    try {
        await sgMail.send(msg);
        await sgMail.send(thankYouMsg);
        res.status(200).json({ message: EMessages.EMAIL_SENT });
    } catch (error) {
        res.status(400).json({ error: EMessages.EMAIL_NOT_SENT });
    }
};
