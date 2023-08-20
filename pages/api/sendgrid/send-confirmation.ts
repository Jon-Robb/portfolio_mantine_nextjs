import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';
import { replaceTemplateVariables } from '../../../utils/text';
import cors, { runMiddleWare } from '../../../utils/cors';
import { defaultUsernames, emailTemplates } from '../../../data/EmailsData';
import { emailValidation } from '../../../utils/validation';
import { addToken } from '../../../db/services/PendingTokenServices';
import { EMessages } from '../../../typescript/enums/EMessages';
import { EConstants } from '../../../typescript/enums/EConstants';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await runMiddleWare({ req, res, fn: cors });

        const { name, email, language } = req.body;

        if (!emailValidation(email)) {
            res.status(400).json({ error: 'Invalid email' });
            return;
        }
        const userName = name || defaultUsernames[language];

        const token = uuidv4();

        const link = `${process.env.CUSTOM_URL}${EConstants.RECEIVE_CONFIRMATION_ROUTE}?token=${token}`;

        const confirmationMsg = {
            to: email,
            from: `${process.env.SENDGRID_FROM}`,
            subject:
                replaceTemplateVariables(emailTemplates[language].confirmationEmail.subject,
                    { userName }),
            text:
                replaceTemplateVariables(emailTemplates[language].confirmationEmail.text,
                    { userName, link }),
        };

        try {
            await sgMail.send(confirmationMsg);
            await addToken(token, email);
            res.status(200).json({ message: EMessages.EMAIL_SENT });
        } catch (error) {
            res.status(500).json({ error: EMessages.EMAIL_NOT_SENT });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in the send-confirmation endpoint' });
    }
};
