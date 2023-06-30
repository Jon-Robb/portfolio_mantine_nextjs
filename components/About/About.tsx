import { Title, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
// import useStyles from './About.styles';

export default function About() {
    const { t } = useTranslation();
    // const { classes } = useStyles();
    return (
        <section className="section" id="about">
            <Title order={2} mt={32}> {t('aboutme')} </Title>
            <Text>
                {t('aboutme2')}
            </Text>
            <Text>
                {t('aboutme3')}
            </Text>
            <Text>
                {t('aboutme4')}
            </Text>
        </section>
    );
}
