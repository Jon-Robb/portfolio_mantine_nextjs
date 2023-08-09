import { useEffect } from 'react';
import { Button, Paper, Notification } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import useContactForm from '../../hooks/useContactForm';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ContactForm.styles';
import useContactFormLogic from '../../hooks/useContactFormLogic';
import NameInput from './ContactFormGroup/NameInput/NameInput';
import EmailInput from './ContactFormGroup/EmailInput/EmailInput';
import MessageInput from './ContactFormGroup/TextAreaContactForm/MessageInput';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const screenSize = useScreenSize();
    const { t } = useTranslation();
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
        successNotification,
        setSuccessNotification,
    } = useContactFormLogic(form);

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
        setLoading(false);
        setNotification({ title: '', message: '' });
    }, [form.values.email]);

    useEffect(() => {
        console.log('successNotification', successNotification);
    }, [successNotification]);

    return (
        <Paper withBorder className={classes.wrapper}>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                <NameInput label={t('contact.nameInput.label')} ariaLabel={t('contact.nameInput.arialabel')} placeholder={t('contact.nameInput.placeholder')} form={form} screenSize={screenSize} />
                <EmailInput label={t('contact.emailInput.label')} ariaLabel={t('contact.emailInput.arialabel')} placeholder={t('contact.emailInput.placeholder')} form={form} screenSize={screenSize} onBlur={handleEmailBlur} loading={loading} />
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
                {sendConfirmation && (
                    <Button
                      size={screenSize}
                      className={classes.button}
                      type="button"
                      variant="outline"
                      onClick={handleSendConfirmation}
                    >
                        {t('common.sendlink')}
                    </Button>
                )}
                <MessageInput label={t('contact.messageInput.label')} ariaLabel={t('contact.messageInput.arialabel')} placeholder={t('contact.messageInput.placeholder')} form={form} screenSize={screenSize} />
                {successNotification.title !== '' && (
                        <Notification
                          title={successNotification.title}
                          loading={loading}
                          onClose={() => setSuccessNotification({ title: '', message: '' })}
                          withCloseButton={!loading}
                        >
                            {successNotification.message}
                        </Notification>
                    )}
                <Button size={screenSize} className={classes.button} type="submit" variant="outline" disabled={!form.isValid() || !isVerifiedEmail || loading}>
                    {loading ? t('common.sending') : t('common.send')}
                </Button>
            </form>
        </Paper>
    );
}
