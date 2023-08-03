import { useState } from 'react';
import { TextInput, Textarea, Button, Paper, Notification } from '@mantine/core';
import axios from 'axios';
import useContactForm from '../../hooks/useContactForm';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ContactForm.styles';
import { EMessages } from '../../typescript/enums/EMessages';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const screenSize = useScreenSize();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ title: '', message: '' });
    const [isVerifiedEmail, setIsVerifiedEmail] = useState(false);
    const [isPendingToken, setIsPendingToken] = useState(false);
    const [sendConfirmation, setSendConfirmation] = useState(false);
    const [confirmationSent, setConfirmationSent] = useState(false);

    const handleSubmit = async (values: any) => {
        setLoading(true);
        setNotification({ title: 'Loading', message: 'Sending email' });

        try {
            const response = await axios.post('/api/send-email', values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setLoading(false);
            if (response.status === 200) {
                form.reset();
                setNotification({ title: 'Success', message: 'Email sent successfully.' });
            } else {
                setNotification({ title: 'Error', message: 'Email failed to send, please try again later.' });
            }
        } catch (error) {
            setLoading(false);
            setNotification({ title: 'Error', message: 'Something went wrong, please try again later.' });
        }
    };

    const handleEmailBlur = async () => {
        if (form.values.email !== '') {
            form.validateField('email');
            if (!form.isValid('email')) return;
            if (!isVerifiedEmail && !isPendingToken) {
                try {
                    const response = await axios.post('/api/db/check-email', { email: form.values.email }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (response.data.message === EMessages.EMAIL_NOT_FOUND) {
                        setNotification({ title: 'Please verify you email', message: 'A link will be sent to your address when you press the button' });
                        setSendConfirmation(true);
                    } else if (response.data.message === EMessages.EMAIL_VERIFIED) {
                        setIsVerifiedEmail(true);
                        setNotification({ title: 'Success', message: 'Email verified successfully.' });
                    } else if (response.data.message === EMessages.EMAIL_PENDING) {
                        setIsPendingToken(true);
                        setNotification({ title: 'Pending link', message: 'Your Email address has a pending verifying token, please check your emails.' });
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    const checkVerification = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/db/check-email', { email: form.values.email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.message === EMessages.EMAIL_VERIFIED) {
                setConfirmationSent(false);
                setIsVerifiedEmail(true);
                setNotification({ title: 'Success', message: 'Email verified successfully.' });
            } else if (response.data.message === EMessages.EMAIL_PENDING) {
                setIsPendingToken(true);
                setNotification({ title: 'Pending link', message: 'Your Email address has a pending verifying token, please check your emails.' });
            } else if (response.data.message === EMessages.EMAIL_NOT_FOUND) {
                setNotification({ title: 'Please verify you email', message: 'A link will be sent to your address when you press the button' });
                setSendConfirmation(true);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const handleSendConfirmation = async () => {
        setSendConfirmation(false);
        setConfirmationSent(true);
        setLoading(true);
        try {
            const response = await axios.post('/api/sendgrid/send-confirmation', { email: form.values.email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.message === EMessages.EMAIL_SENT) {
                setNotification({ title: 'Link sent...', message: 'Please click the link in your emails...' });
                setIsPendingToken(true);
            } else if (response.data.message === EMessages.EMAIL_NOT_SENT) {
                setNotification({ title: 'Error', message: 'The confirmation email could not get through' });
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        setNotification({ title: 'Link sent...', message: 'Please click the link in your emails...' });
    };

    return (
        <Paper withBorder className={classes.wrapper}>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                  label="Name"
                  aria-label="Enter your name"
                  placeholder="Enter your name"
                  withAsterisk={!form.isValid('name')}
                  size={screenSize}
                  {...form.getInputProps('name')}
                  onBlur={form.values.name !== '' ? () => form.validateField('name') : () => { }}
                />
                <TextInput
                  label="Email"
                  aria-label="Enter your email"
                  placeholder="Enter your email"
                  withAsterisk={!form.values.email || !form.isValid('email')}
                  size={screenSize}
                  {...form.getInputProps('email')}
                  onBlur={handleEmailBlur}
                />
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
                {confirmationSent && (
                    <Button
                      size={screenSize}
                      className={classes.button}
                      type="button"
                      variant="outline"
                      onClick={checkVerification}
                    >
                      Done!
                    </Button>
                )}
                <Textarea
                  label="Message"
                  aria-label="Enter your message"
                  placeholder="Enter your message"
                  withAsterisk={!form.isValid('message')}
                  autosize
                  minRows={5}
                  maxRows={10}
                  size={screenSize}
                  {...form.getInputProps('message')}
                  onBlur={form.values.message !== '' ? () => form.validateField('message') : () => { }}
                />
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
