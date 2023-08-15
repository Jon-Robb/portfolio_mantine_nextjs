import { Text, Title, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
// import useStyles from './home.styles';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';

export default function HomeSection() {
    const [inProp, setInProp] = useState(false);
    const { t } = useTranslation();
    // const { classes } = useStyles();
    const skillBadges = useSkillBadgesData();

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <section className="section" id="home">
            <Transition transition="pop" duration={1000} timingFunction="ease" mounted={inProp} onEntered={() => console.log('home welcome')}>
                {(styles) => <div style={styles}> <Title order={1}> {t('home.welcome')} </Title> </div>}
            </Transition>
            <Text> {t('home.desc')} </Text>
            <div id="skills">
                <SkillBadgeContainer skillBadges={skillBadges} />
            </div>
        </section>
    );
}
