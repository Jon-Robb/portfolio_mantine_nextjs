import { TextInput, Textarea, Button, Paper } from '@mantine/core';
import useContactForm from '../../hooks/useContactForm';
import useStyles from './ContactForm.styles';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();

    return (
        <Paper className={classes.wrapper}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  required
                  withAsterisk
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  required
                  withAsterisk
                  {...form.getInputProps('email')}
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  required
                  withAsterisk
                  {...form.getInputProps('message')}
                />
                <Button type="submit" variant="outline">Submit</Button>
            </form>
        </Paper>
    );
}
