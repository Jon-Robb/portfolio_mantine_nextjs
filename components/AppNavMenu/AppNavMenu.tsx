import { Navbar, Anchor, Text, Select } from '@mantine/core';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import IconsContainer from '../IconsContainer/IconsContainer';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
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
        <ColorSchemeToggle />
        <Select
          data={[
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'Français' },
            { value: 'es', label: 'Español' },
          ]}
          defaultValue="en"
        />
        <NavLinkMenu />
        <IconsContainer />
      </div>
    </Navbar>
  );
}
