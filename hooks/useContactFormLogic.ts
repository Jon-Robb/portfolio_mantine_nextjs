import { useState } from 'react';
import { EMessages } from '../typescript/enums/EMessages';
import { checkEmail, sendEmail, sendConfirmationMail } from '../components/ContactForm/ContactFormServices';

export default function useContactFormLogic(form:any) {
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
            setNotification({ title: 'Success', message: 'Email verified successfully.' });
        } else if (response === EMessages.EMAIL_PENDING) {
            setIsPendingToken(true);
            setNotification({ title: 'Pending link', message: 'Your Email address has a pending verifying token, please check your emails.' });
        } else if (response === EMessages.EMAIL_NOT_FOUND) {
            setNotification({ title: 'Please verify you email', message: 'A link will be sent to your address when you press the button' });
            setSendConfirmation(true);
        }
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        setNotification({ title: 'Loading', message: 'Sending email' });
        const response = await sendEmail(values);
        setLoading(false);
        if (response.status === 200) {
            form.reset();
            setNotification({ title: 'Success', message: 'Email sent successfully.' });
        } else {
            setNotification({ title: 'Error', message: 'Email failed to send, please try again later.' });
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
        const response = await sendConfirmationMail(form.values.email);
        if (response === EMessages.EMAIL_SENT) {
            setNotification({ title: 'Link sent...', message: 'Please click the link in your emails...' });
            setIsPendingToken(true);
        } else if (response === EMessages.EMAIL_NOT_SENT) {
            setNotification({ title: 'Error', message: 'The confirmation email could not get through' });
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
