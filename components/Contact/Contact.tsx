import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm/ContactForm';
import useStyles from './Contact.styles';

export default function Contact() {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <section className="section" id="contact">
            <Title className={classes.title} order={2} mt={32} mb={32}> {t('contact.title')} </Title>
            <ContactForm />
        </section>
    );
}
