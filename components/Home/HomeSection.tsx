import { Text, Title, Transition } from '@mantine/core';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { EntryAnimationContext } from '../../contexts/EntryAnimationContext';
import useStyles from './HomeSection.styles';

export default function HomeSection() {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const {
        brandAnimationCompleted,
        homeAnimationCompleted,
        setHomeAnimationCompleted,
        setEntryAnimationCompleted } = useContext(EntryAnimationContext)!;

    const handleAllCompleted = () => {
        setTimeout(() => {
            setEntryAnimationCompleted(true);
        }, 1000);
    };

    return (
        <section className={classes.wrapper} id="home">
            <Transition transition="pop" duration={1000} timingFunction="ease" mounted={brandAnimationCompleted} onEntered={() => setHomeAnimationCompleted(true)} keepMounted>
                {(styles) => <div style={styles}> <Title order={1}> {t('home.welcome')} </Title> </div>}
            </Transition>
            <Transition transition="scale" duration={1000} timingFunction="ease" mounted={homeAnimationCompleted} onEntered={handleAllCompleted} keepMounted>
                {(styles) => (
                    <div style={styles}>
                        <Text> {t('home.desc')} </Text>
                    </div>
                )}
            </Transition>
        </section>
    );
}
