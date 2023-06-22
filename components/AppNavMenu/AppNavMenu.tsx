import { Navbar } from '@mantine/core';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import useStyles from './AppNavMenu.styles';

interface AppNavbarProps {
  opened: boolean;
}

export default function AppNavMenu({ opened }: AppNavbarProps) {
  const { classes } = useStyles();
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 275, lg: 300 }} className={classes.fullNavbar}>
      <NavLinkMenu />
    </Navbar>
  );
}
