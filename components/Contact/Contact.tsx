import { Title } from '@mantine/core';
import ContactForm from '../ContactForm/ContactForm';
import useStyles from './Contact.styles';

export default function Contact() {
    const { classes } = useStyles();

    return (
        <section className="section" id="contact">
            <Title className={classes.title} order={2} mt={32} mb={32}> Contact </Title>
            <ContactForm />
        </section>
    );
}
