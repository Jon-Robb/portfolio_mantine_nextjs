import { useEffect } from 'react';
import { Button, Paper, Notification } from '@mantine/core';
import useContactForm from '../../hooks/useContactForm';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ContactForm.styles';
import useEmailStatusAndNotification from '../../hooks/useEmailStatusAndNotification';
import NameInput from './ContactFormGroup/NameInput/NameInput';
import EmailInput from './ContactFormGroup/EmailInput/EmailInput';
import TextAreaContactForm from './ContactFormGroup/TextArea/TextAreaContactForm';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const screenSize = useScreenSize();
    const {
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
    } = useEmailStatusAndNotification(form);

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
