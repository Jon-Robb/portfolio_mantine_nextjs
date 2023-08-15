import { Navbar, Anchor, Text } from '@mantine/core';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import IconsContainer from '../IconsContainer/IconsContainer';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './AppNavMenu.styles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

interface AppNavbarProps {
  opened: boolean;
  fadeInProp?: boolean;
}

export default function AppNavMenu({ opened, fadeInProp: animationCompleted }: AppNavbarProps) {
  const { classes } = useStyles();

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 275, lg: 300 }} className={classes.fullNavbar}>
      <div
        className={classes.navMenuContainer}
        style={{
          opacity: animationCompleted && animationCompleted ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      >
        <Text className={classes.titleName}> <Anchor href="/"> Jonathan Robinson </Anchor> </Text>
        <NavLinkMenu />
        <LanguageSelector />
        <ColorSchemeToggle />
        <IconsContainer />
      </div>
    </Navbar>
  );
}
