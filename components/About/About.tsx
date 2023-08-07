import { Title, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
// import useStyles from './About.styles';

export default function About() {
    const { t } = useTranslation();
    // const { classes } = useStyles();

    return (
        <section className="section" id="about">
            <Title order={2} mt={32}> {t('about.title')} </Title>
            <Text>
                {t('about.para1')}
            </Text>
            <Text>
                {t('about.para2')}
            </Text>
            <Text>
                {t('about.para3')}
            </Text>
        </section>
    );
}
