import { useState } from 'react';
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

export default function AppShellContainer() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  const { classes } = useStyles();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [homeAnimationCompleted, setHomeAnimationCompleted] = useState(false);

  const handleHomeAnimationCompleted = () => {
    setHomeAnimationCompleted(true);
  };

  return (
    <>
      <EntryAnimation onCompleted={() => setAnimationCompleted(true)} />
      <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu fadeInProp={homeAnimationCompleted} opened={opened} />} header={<AppHeader triggerFadeIn={homeAnimationCompleted} onClick={toggleOpened} opened={opened} />}>
        <HomeSection inProp={animationCompleted} onCompleted={handleHomeAnimationCompleted} />
        {homeAnimationCompleted && (
          <Transition transition="fade" duration={1000} timingFunction="ease" mounted={homeAnimationCompleted} keepMounted>
            {(styles) => <div style={styles}>

              <About />
              <Projects />
              <Services />
              <Contact />
                         </div>}
          </Transition>
        )}
      </AppShell>
    </>
  );
}
