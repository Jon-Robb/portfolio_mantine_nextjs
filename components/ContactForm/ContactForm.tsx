import { useState } from 'react';
import { TextInput, Textarea, Button, Paper, Notification } from '@mantine/core';
import useContactForm from '../../hooks/useContactForm';
import useStyles from './ContactForm.styles';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ type: '', message: '' });

    const handleSubmit = async (values: any) => {
        setLoading(true);
        setNotification({ type: 'Loading', message: 'Sending email' });
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        setLoading(false);
        if (response.ok) {
            form.reset();
            setNotification({ type: 'Success', message: 'Email sent successfully.' });
        } else {
            setNotification({ type: 'Error', message: 'Email failed to send, please try again later.' });
        }
    };

    return (
        <Paper className={classes.wrapper}>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  withAsterisk
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  withAsterisk
                  {...form.getInputProps('email')}
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  withAsterisk
                  autosize
                  minRows={5}
                  maxRows={10}
                  {...form.getInputProps('message')}
                />
                <Button className={classes.button} type="submit" variant="outline">
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </form>
            {notification.type !== '' && (
                <Notification
                  title={notification.type}
                  loading={loading}
                  onClose={() => setNotification({ type: '', message: '' })}
                  withCloseButton={!loading}
                >
                    {notification.message}
                </Notification>
            )}
        </Paper>
    );
}
