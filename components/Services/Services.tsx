import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import useStyles from './Services.styles';

export default function Services() {
    const { classes } = useStyles();
    const { t } = useTranslation();
    return (
        <section className="section" id="services">
            <Title order={2} mt={32} mb={32}> {t('services')} </Title>
            <div className={classes.servicesWrapper}>
                Services Container
            </div>
        </section>
    );
}
