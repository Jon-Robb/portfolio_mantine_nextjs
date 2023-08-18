import { Navbar, Anchor, Text, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import IconsContainer from '../IconsContainer/IconsContainer';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './AppNavMenu.styles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

interface AppNavbarProps {
  opened: boolean;
}

export default function AppNavMenu({ opened }: AppNavbarProps) {
  const { classes } = useStyles();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    if (opened) {
      setIsNavbarVisible(true);
    } else {
      // Delay hiding the navbar to allow the transition to complete
      const timeout = setTimeout(() => {
        setIsNavbarVisible(false);
      }, 350);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [opened]);

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!isNavbarVisible} width={{ sm: 250, md: 275, lg: 300, xl: 400 }} className={classes.fullNavbar}>
          <Transition transition="scale" duration={500} timingFunction="ease" mounted={opened}>
            {(scaleStyles) => (
              <div style={{ ...scaleStyles }} className={classes.navMenuContainer}>
                <Text className={classes.titleName}> <Anchor href="/"> Jonathan Robinson </Anchor> </Text>
                <NavLinkMenu />
                <LanguageSelector />
                <ColorSchemeToggle />
                <IconsContainer />
              </div>
            )}
          </Transition>
    </Navbar>
  );
}
