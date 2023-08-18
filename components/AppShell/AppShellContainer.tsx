import { useState, useContext } from 'react';
import { AppShell, Transition } from '@mantine/core';
import EntryAnimation from '../Animation/EntryAnimation/EntryAnimation';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';
import HomeSection from '../Home/HomeSection';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import useStyles from './AppShellContainer.styles';
import { EntryAnimationCompletedContext } from '../../contexts/EntryAnimationCompletedContext';

export default function AppShellContainer() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  const { classes } = useStyles();
  const [homeAnimationCompleted, setHomeAnimationCompleted] = useState(false);
  const { entryAnimationCompleted } = useContext(EntryAnimationCompletedContext)!;

  const handleHomeAnimationCompleted = () => {
    setTimeout(() => {
      setHomeAnimationCompleted(true);
    }, 1000);
  };

  return (
    <>
    {!entryAnimationCompleted && (
      <EntryAnimation />
    )}
      <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu fadeInProp={homeAnimationCompleted} opened={opened} />} header={<AppHeader triggerFadeIn={homeAnimationCompleted} onClick={toggleOpened} opened={opened} />}>
        <HomeSection onCompleted={handleHomeAnimationCompleted} />
        <Transition transition="fade" duration={1000} timingFunction="ease" mounted={homeAnimationCompleted} keepMounted>
          {(styles) =>
            <div style={styles}>
              <About />
              <Projects />
              <Services />
              <Contact />
            </div>}
        </Transition>
      </AppShell>
    </>
  );
}
