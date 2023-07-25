import { TextInput, Textarea, Button, Paper } from '@mantine/core';
import useContactForm from '../../hooks/useContactForm';
import useStyles from './ContactForm.styles';

export default function ContactForm() {
    const { classes } = useStyles();
    const form = useContactForm();

    const handleSubmit = (values:any) => {
        console.log(values);
    };

    return (
        <Paper className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
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
                  {...form.getInputProps('message')}
                />
                <Button type="submit" variant="outline">Submit</Button>
            </form>
        </Paper>
    );
}
