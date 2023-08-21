import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import ContactForm from '../ContactForm/ContactForm';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="section" id="contact">
            <StickyTitle title={t('contact.title')} />
            <ContactForm />
        </section>
    );
}
