import { Text, Title, Transition } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
// import useStyles from './home.styles';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';

export default function HomeSection({ onCompleted, inProp }:
    { onCompleted?: () => void, inProp: boolean }) {
    const { t } = useTranslation();
    const [homeWelcomeAnimationCompleted, setHomeWelcomeAnimationCompleted] = useState(false);
    // const { classes } = useStyles();
    const skillBadges = useSkillBadgesData();

    const handleAllCompleted = () => {
        onCompleted && onCompleted();
    };

    return (
        <section className="section" id="home">
            <Transition transition="pop" duration={1000} timingFunction="ease" mounted={inProp} onEntered={() => setHomeWelcomeAnimationCompleted(true)}>
                {(styles) => <div style={styles}> <Title order={1}> {t('home.welcome')} </Title> </div>}
            </Transition>
            <Transition transition="fade" duration={1000} timingFunction="ease" mounted={homeWelcomeAnimationCompleted} onEntered={handleAllCompleted}>
                {(styles) => (
                    <div style={styles}>
                        <Text> {t('home.desc')} </Text>
                        <div id="skills">
                            <SkillBadgeContainer skillBadges={skillBadges} />
                        </div>

                    </div>

                )}
            </Transition>
        </section>
    );
}
