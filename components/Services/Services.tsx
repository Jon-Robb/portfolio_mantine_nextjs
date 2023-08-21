import { useTranslation } from 'react-i18next';
import { Text } from '@mantine/core';
import StickyTitle from '../StickyTitle/StickyTitle';
import useStyles from './Services.styles';

export default function Services() {
    const { classes } = useStyles();
    const { t } = useTranslation();
    return (
        <section className="section" id="services">
            <StickyTitle title={t('services.title')} />
            {/* <Title order={2}> {t('services.title')} </Title> */}
            <div className={classes.servicesWrapper}>
                <Text>
                    Coming Soon...
                </Text>
            </div>
        </section>
    );
}
