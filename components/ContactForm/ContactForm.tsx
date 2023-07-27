import { useState } from 'react';
import { TextInput, Textarea, Button, Paper, Notification } from '@mantine/core';
import axios from 'axios';
import useContactForm from '../../hooks/useContactForm';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ContactForm.styles';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const screenSize = useScreenSize();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ title: '', message: '' });

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

    return (
        <Paper withBorder className={classes.wrapper}>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                  label="Name"
                  aria-label="Enter your name"
                  placeholder="Enter your name"
                  withAsterisk={form.values.name === ''}
                  size={screenSize}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  aria-label="Enter your email"
                  placeholder="Enter your email"
                  withAsterisk={!form.values.email || !form.isValid('email')}
                  size={screenSize}
                  {...form.getInputProps('email')}
                />
                <Textarea
                  label="Message"
                  aria-label="Enter your message"
                  placeholder="Enter your message"
                  withAsterisk={form.values.message === ''}
                  autosize
                  minRows={5}
                  maxRows={10}
                  size={screenSize}
                  {...form.getInputProps('message')}
                />
                <Button size={screenSize} className={classes.button} type="submit" variant="outline">
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
