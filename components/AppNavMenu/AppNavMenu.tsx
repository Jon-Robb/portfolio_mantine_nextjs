import { Navbar, Text } from '@mantine/core';
import useStyles from './AppNavMenu.styles';

interface AppNavbarProps {
  opened: boolean;
}

export default function AppNavMenu({ opened }: AppNavbarProps) {
  const { classes } = useStyles();
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      className={classes.fullNavbar}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
}
