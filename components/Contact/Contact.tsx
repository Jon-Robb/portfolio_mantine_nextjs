import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import ContactForm from '../ContactForm/ContactForm';

interface ContactProps {
    nodeRef?: React.RefObject<HTMLElement>;
}

export default function Contact({ nodeRef }: ContactProps) {
    const { t } = useTranslation();

    return (
        <section ref={nodeRef} className="section" id="contact">
            <StickyTitle title={t('contact.title')} />
            <ContactForm />
        </section>
    );
}
