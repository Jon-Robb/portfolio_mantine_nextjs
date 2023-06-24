import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';
import Home from '../Home/home';

export default function AppShellContainer() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <AppNavMenu opened={opened} />
      }
      header={
        <AppHeader onClick={toggleOpened} opened={opened} />
      }
    >
      <Home />
    </AppShell>
  );
}
