import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EMessages } from '../typescript/enums/EMessages';
import { checkEmail, sendEmail, sendConfirmationMail } from '../components/ContactForm/ContactFormServices';
import IConfirmationEmailData from '../typescript/interfaces/IConfirmationEmailData';
import i18n from '../i18n/config';

export default function useContactFormLogic(form: any) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ title: '', message: '' });
    const [isVerifiedEmail, setIsVerifiedEmail] = useState(false);
    const [isPendingToken, setIsPendingToken] = useState(false);
    const [sendConfirmation, setSendConfirmation] = useState(false);

    const verifyEmail = async () => {
        const response = await checkEmail(form.values.email);
        if (response === EMessages.EMAIL_VERIFIED) {
            setIsPendingToken(false);
            setIsVerifiedEmail(true);
            setNotification({
                title: t('notifications.verifyEmail.success.title'),
                message: t('notifications.verifyEmail.success.message'),
            });
        } else if (response === EMessages.EMAIL_PENDING) {
            setIsPendingToken(true);
            setNotification({
                title: t('notifications.verifyEmail.pendinglink.title'),
                message: t('notifications.verifyEmail.pendinglink.message'),
            });
        } else if (response === EMessages.EMAIL_NOT_FOUND) {
            setNotification({
                title: t('notifications.verifyEmail.notverified.title'),
                message: t('notifications.verifyEmail.notverified.message'),
            });
            setSendConfirmation(true);
        }
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        setNotification({
            title: t('notifications.submit.loading.title'),
            message: t('notifications.submit.loading.message'),
        });
        const response = await sendEmail(values);
        setLoading(false);
        if (response.status === 200) {
            form.reset();
            setNotification({
                title: t('notifications.submit.success.title'),
                message: t('notifications.submit.success.message'),
            });
        } else {
            setNotification({
                title: t('notifications.submit.error.title'),
                message: t('notifications.submit.error.message'),
            });
        }
    };

    const handleEmailBlur = async () => {
        if (form.values.email !== '') {
            form.validateField('email');
            if (!form.isValid('email')) return;
            if (!isVerifiedEmail && !isPendingToken) {
                verifyEmail();
            }
        }
    };

    const handleSendConfirmation = async () => {
        setSendConfirmation(false);
        const requestData : IConfirmationEmailData = {
            name: form.values.name,
            email: form.values.email,
            language: i18n.language,
        };
        const response = await sendConfirmationMail(requestData);
        if (response === EMessages.EMAIL_SENT) {
            setNotification({
                title: t('notifications.sendConfirmation.linkSent.title'),
                message: t('notifications.sendConfirmation.linkSent.message'),
            });
            setIsPendingToken(true);
        } else if (response === EMessages.EMAIL_NOT_SENT) {
            setNotification({
                title: t('notifications.sendConfirmation.error.title'),
                message: t('notifications.sendConfirmation.error.message'),
            });
        }
    };

    return {
        loading,
        setLoading,
        notification,
        setNotification,
        isVerifiedEmail,
        setIsVerifiedEmail,
        isPendingToken,
        setIsPendingToken,
        sendConfirmation,
        setSendConfirmation,
        verifyEmail,
        handleSubmit,
        handleEmailBlur,
        handleSendConfirmation,
    };
}
