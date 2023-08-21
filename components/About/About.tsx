import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';
// import useStyles from './About.styles';

export default function About() {
    const { t } = useTranslation();
    const skillBadges = useSkillBadgesData();
    // const { classes } = useStyles();

    return (
        <section className="section" id="about">
            <StickyTitle title={t('about.title')} />
            <Text>
                {t('about.para1')}
            </Text>
            <Text>
                {t('about.para2')}
            </Text>
            <Text>
                {t('about.para3')}
            </Text>
            <div id="skills">
                <SkillBadgeContainer skillBadges={skillBadges} />
            </div>
        </section>
    );
}
