interface EmailTemplate {
    subject: string;
    text: string;
}

interface ILanguageTemplate {
    [key: string]: {
        confirmationEmail: EmailTemplate;
        thankyouEmail: EmailTemplate;
    };
}

export const emailTemplates: ILanguageTemplate = {
    en: {
        confirmationEmail: {
            subject: 'Thanks for contacting me, please confirm your email address',
            text: 'Greetings {{userName}}, \n\nThanks for contacting me, please confirm your email address by clicking the link below:\n\n{{link}}\n\nYour email address will be kept for 6 months after your confirmation, the expiration resets at every new daily mail.\n\nIf you did not request this email, please ignore it.\n\nThanks,\nJonathan Robinson',
        },
        thankyouEmail: {
            subject: '{{name}}, I have received your message',
            text: 'Greetings {{name}}, \n\nThanks for contacting me, I will get back to you as soon as possible.\n\nThanks,\nJonathan Robinson',
        },
    },
    es: {
        confirmationEmail: {
            subject: 'Gracias para contactarme, por favor confirme su correo electrónico',
            text: 'Hola, {{userName}} \n\nGracias para contactarme. Por favor confirme su correo electrónico haciendo clic en el enlace de abajo:\n\n{{link}}\n\nPor favor, ten en cuenta que su dirección de correo electrónico se guardará durante 6 meses, renovándose la fecha de vencimiento con cada nuevo correo electrónico en un día determinado\n\nSi no ha enviado este correo electrónico, por favor ignore este mensaje.\n\nGracias,\nJonathan Robinson',
        },
        thankyouEmail: {
            subject: '{{name}}, gracias por contactarme',
            text: 'Hola, {{name}} \n\nGracias por contactarme. Su correo electrónico ha sido recibido y será respondido lo antes posible.\n\nGracias,\nJonathan Robinson',
        },
    },
    fr: {
        confirmationEmail: {
            subject: "Merci de m'avoir contacté, veuillez confirmer votre adresse courriel",
            text: "Bonjour, {{userName}} \n\nMerci de m'avoir contacté, veuillez confirmer votre adresse courriel en cliquant sur le lien ci-dessous:\n\n{{link}}\n\nVeuillez noter que votre adresse courriel sera retenue 6 mois, la date d'expiration se renouvelant à chaque nouveau courriel d'une journée donnée\n\nSi vous n'avez pas demandé à être contacté, veuillez ignorer cet e-mail.\n\nCordialement,\nJonathan Robinson",
        },
        thankyouEmail: {
            subject: "{{name}}, j'ai bien reçu votre message",
            text: "Bonjour {{name}},\n\nMerci de m'avoir contacté, j'ai bien reçu votre message et je vous répondrai dès que possible.\n\nCordialement,\nJonathan Robinson",
        },
    },
};

interface IDefaultUsernames {
    [key: string]: string;
}

export const defaultUsernames: IDefaultUsernames = {
    en: 'Traveler',
    es: 'Viajero',
    fr: 'Voyageur',
};
