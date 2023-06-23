import { Navbar, Anchor, Text } from '@mantine/core';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import IconsContainer from '../IconsContainer/IconsContainer';
import useStyles from './AppNavMenu.styles';

interface AppNavbarProps {
  opened: boolean;
}

export default function AppNavMenu({ opened }: AppNavbarProps) {
  const { classes } = useStyles();
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 275, lg: 300 }} className={classes.fullNavbar}>
      <div className={classes.navMenuContainer}>
        <Text className={classes.titleName}> <Anchor href="/"> Jonathan Robinson </Anchor> </Text>
        <NavLinkMenu />
        <IconsContainer />
      </div>
    </Navbar>
  );
}
