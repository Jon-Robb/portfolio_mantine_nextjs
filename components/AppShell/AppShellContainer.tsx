import { useState } from 'react';
import { AppShell } from '@mantine/core';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';
import Home from '../Home/home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import useStyles from './AppShellContainer.styles';

export default function AppShellContainer() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  const { classes } = useStyles();
  return (
    <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu opened={opened} />} header={<AppHeader onClick={toggleOpened} opened={opened} />}>
      <Home />
      <About />
      <Projects />
      <Services />
    </AppShell>
  );
}
