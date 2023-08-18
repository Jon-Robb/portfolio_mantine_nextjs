import { Text, Title, Transition } from '@mantine/core';
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { EntryAnimationCompletedContext } from '../../contexts/EntryAnimationCompletedContext';
// import useStyles from './home.styles';

export default function HomeSection({ onCompleted }:
    { onCompleted?: () => void }) {
    const { t } = useTranslation();
    const [homeWelcomeAnimationCompleted, setHomeWelcomeAnimationCompleted] = useState(false);
    // const { classes } = useStyles();
    const { entryAnimationCompleted } = useContext(EntryAnimationCompletedContext)!;

    const handleAllCompleted = () => {
        onCompleted && onCompleted();
    };

    return (
        <section className="section" id="home" style={{}}>
            <Transition transition="pop" duration={1000} timingFunction="ease" mounted={entryAnimationCompleted} onEntered={() => setHomeWelcomeAnimationCompleted(true)}>
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
