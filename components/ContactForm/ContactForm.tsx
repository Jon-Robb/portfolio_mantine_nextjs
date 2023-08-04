import { useEffect, useState } from 'react';
import { Button, Paper, Notification } from '@mantine/core';
import useContactForm from '../../hooks/useContactForm';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ContactForm.styles';
import { EMessages } from '../../typescript/enums/EMessages';
import { checkEmail, sendEmail, sendConfirmationMail } from './ContactFormServices';
import NameInput from './ContactFormGroup/NameInput/NameInput';
import EmailInput from './ContactFormGroup/EmailInput/EmailInput';
import TextAreaContactForm from './ContactFormGroup/TextArea/TextAreaContactForm';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const screenSize = useScreenSize();
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

    useEffect(() => {
        // polling for 5 minutes
        const maxCount = 60;
        let count = 0;
        const interval = setInterval(() => {
            if (isPendingToken && count < maxCount) {
                verifyEmail();
                count += 1;
            }
        }, 5000);
        setLoading(isPendingToken);
        return () => clearInterval(interval);
    }, [isPendingToken]);

    useEffect(() => {
        setIsVerifiedEmail(false);
        setIsPendingToken(false);
        setSendConfirmation(false);
        setNotification({ title: '', message: '' });
    }, [form.values.email]);

    return (
        <Paper withBorder className={classes.wrapper}>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                <NameInput form={form} screenSize={screenSize} />
                <EmailInput form={form} screenSize={screenSize} onBlur={handleEmailBlur} />
                {sendConfirmation && (
                    <Button
                      size={screenSize}
                      className={classes.button}
                      type="button"
                      variant="outline"
                      onClick={handleSendConfirmation}
                    >
                        Send link!
                    </Button>
                )}
                <TextAreaContactForm form={form} screenSize={screenSize} />
                <Button size={screenSize} className={classes.button} type="submit" variant="outline" disabled={!form.isValid() || !isVerifiedEmail || loading}>
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </form>
            {notification.title !== '' && (
                <Notification
                  title={notification.title}
                  loading={loading}
                  onClose={() => setNotification({ title: '', message: '' })}
                  withCloseButton={!loading}
                >
                    {notification.message}
                </Notification>
            )}
        </Paper>
    );
}
