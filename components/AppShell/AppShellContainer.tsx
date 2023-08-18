import { useState, useContext, useEffect } from 'react';
import { AppShell, Transition } from '@mantine/core';
import BrandAnimation from '../Animation/BrandAnimation/BrandAnimation';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';
import HomeSection from '../Home/HomeSection';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import useStyles from './AppShellContainer.styles';
import { useScreenWidth } from '../../hooks/useScreenSize';
import { EntryAnimationContext } from '../../contexts/EntryAnimationContext';

export default function AppShellContainer() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  const { classes } = useStyles();
  const { entryAnimationCompleted } = useContext(EntryAnimationContext)!;
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (!entryAnimationCompleted) return;
    if (screenWidth > 768) {
      setOpened(true);
    }
  }, [screenWidth, entryAnimationCompleted]);
  return (
    <>
    {!entryAnimationCompleted && (
      <BrandAnimation />
    )}
      <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu opened={opened} />} header={<AppHeader onClick={toggleOpened} opened={opened} />}>
        <HomeSection />
        <Transition transition="fade" duration={1000} timingFunction="ease" mounted={entryAnimationCompleted} keepMounted>
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
