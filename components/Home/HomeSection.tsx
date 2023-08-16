import { Text, Title, Transition } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import useStyles from './home.styles';

export default function HomeSection({ onCompleted, inProp }:
    { onCompleted?: () => void, inProp: boolean }) {
    const { t } = useTranslation();
    const [homeWelcomeAnimationCompleted, setHomeWelcomeAnimationCompleted] = useState(false);
    // const { classes } = useStyles();

    const handleAllCompleted = () => {
        onCompleted && onCompleted();
    };

    return (
        <section className="section" id="home" style={{}}>
            <Transition transition="pop" duration={1000} timingFunction="ease" mounted={inProp} onEntered={() => setHomeWelcomeAnimationCompleted(true)}>
                {(styles) => <div style={styles}> <Title order={1}> {t('home.welcome')} </Title> </div>}
            </Transition>
            <Transition transition="scale" duration={1000} timingFunction="ease" mounted={homeWelcomeAnimationCompleted} onEntered={handleAllCompleted} keepMounted>
                {(styles) => (
                    <div style={styles}>
                        <Text> {t('home.desc')} </Text>
                    </div>
                )}
            </Transition>
        </section>
    );
}
