import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';
import i18nBackend from '../../../i18n/i18nBackend';
import cors, { runMiddleWare } from '../../../utils/cors';
import { emailValidation } from '../../../utils/validation';
import { addToken } from '../../../db/services/PendingTokenServices';
import { EMessages } from '../../../typescript/enums/EMessages';
import { EConstants } from '../../../typescript/enums/EConstants';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await runMiddleWare({ req, res, fn: cors });

        const { name, email, language } = req.body;

        // change language before using i18nBackend
        i18nBackend.changeLanguage(language);
        const userName = name || i18nBackend.t('common.traveler');

        if (!emailValidation(email)) {
            res.status(400).json({ error: 'Invalid email' });
            return;
        }

        const token = uuidv4();
        await addToken(token, email);

        const link = `${process.env.CUSTOM_URL}${EConstants.RECEIVE_CONFIRMATION_ROUTE}?token=${token}`;

        const confirmationMsg = {
            to: email,
            from: `${process.env.SENDGRID_FROM}`,
            subject: i18nBackend.t('confirmationEmail.subject'),
            text:
                i18nBackend.t('confirmationEmail.text', { userName, link }),
        };

        try {
            await sgMail.send(confirmationMsg);
            res.status(200).json({ message: EMessages.EMAIL_SENT });
        } catch (error) {
            res.status(500).json({ error: EMessages.EMAIL_NOT_SENT });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in the send-confirmation endpoint' });
    }
};
