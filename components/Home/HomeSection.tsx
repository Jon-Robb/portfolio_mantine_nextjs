import { Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
// import useStyles from './home.styles';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';

export default function HomeSection() {
    const { t } = useTranslation();
    // const { classes } = useStyles();
    const skillBadges = useSkillBadgesData();
    return (
        <section className="section" id="home">
            <Title order={1}> {t('home.welcome')} </Title>
            <Text> {t('home.desc')} </Text>
            <div id="skills">
                <SkillBadgeContainer skillBadges={skillBadges} />
            </div>
        </section>
    );
}
