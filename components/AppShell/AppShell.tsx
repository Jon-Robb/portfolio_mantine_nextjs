import { useState } from 'react';
import { AppShell, Text, useMantineTheme } from '@mantine/core';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';

export default function AppShellDemo() {
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
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
