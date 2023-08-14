import { useState } from 'react';
import { AppShell } from '@mantine/core';
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
  return (
    <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu animationCompleted={animationCompleted} opened={opened} />} header={<AppHeader triggerFadeIn={animationCompleted} onClick={toggleOpened} opened={opened} />}>
      <EntryAnimation parentCallback={() => setAnimationCompleted(true)} />
      <div style={{
        opacity: animationCompleted ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
      >
        <HomeSection />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
    </AppShell>
  );
}
