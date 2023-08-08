import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';
import i18nBackend from '../../../i18n/i18nBackend';
import cors, { runMiddleWare } from '../../../utils/cors';
import { emailValidation } from '../../../utils/validation';
import { addToken } from '../../../db/services/PendingTokenServices';
import { EMessages } from '../../../typescript/enums/EMessages';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, email, language } = req.body;

        i18nBackend.changeLanguage(language);

        await runMiddleWare({ req, res, fn: cors });

        if (!emailValidation(email)) {
            res.status(400).json({ error: 'Invalid email' });
            return;
        }

        const token = uuidv4();
        await addToken(token, email);

        // const link = `${process.env.NEXT_PUBLIC_URL}/api/receive-confirmation?token=${token}`;

        // const confirmationMsg = {
        //     to: email,
        //     from: `${process.env.SENDGRID_FROM}`,
        //     subject: i18nBackend.t('notifications.sendConfirmation.linkSent.title'),
        //     text:
        //         `${i18nBackend.t('notifications.sendConfirmation.linkSent.message')}\n${link}`,
        // };

        // subject: 'Thank you for contacting me, please confirm your email by clicking the link below.',
        // text:
        // `Hello ${name ?? 'Traveler'},\n\nThank you for contacting me. Please confirm your email by clicking the link below.\n\n${process.env.NEXT_PUBLIC_URL}/api/receive-confirmation?token=${token}\n\nThank you,\n\n${process.env.SENDGRID_FROM_NAME}`,

        // try {
        //     await sgMail.send(confirmationMsg);
        //     res.status(200).json({ message: EMessages.EMAIL_SENT });
        // } catch (error) {
        //     res.status(500).json({ error: EMessages.EMAIL_NOT_SENT });
        // }
    } catch (error) {
        res.status(500).json({ error: 'Error in the send-confirmation endpoint' });
    }
};
