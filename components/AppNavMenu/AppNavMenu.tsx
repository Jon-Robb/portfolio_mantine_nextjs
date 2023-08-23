import { Navbar, Anchor, Text, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import NavLinkMenu from '../NavBarNavLinkMenu/NavBarNavLinkMenu';
import IconsContainer from '../IconsContainer/IconsContainer';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './AppNavMenu.styles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

interface AppNavbarProps {
  opened: boolean;
  activeSection: string;
}

export default function AppNavMenu({ opened, activeSection }: AppNavbarProps) {
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
    return () => { };
  }, [opened]);

  return (
    <Transition transition="scale" duration={500} timingFunction="ease" mounted={opened} keepMounted>
      {(scaleStyles) => (
        <Navbar style={{ ...scaleStyles }} p="md" hiddenBreakpoint="sm" hidden={!isNavbarVisible} width={{ sm: 300, md: 400, lg: 500, xl: 600 }} className={classes.fullNavbar}>
          <div className={classes.navMenuContainer}>
            <Text className={classes.titleName}> <Anchor href="/"> Jonathan Robinson </Anchor> </Text>
              <NavLinkMenu activeSection={activeSection} />
            <div className={classes.languageSelectorWrapper}>
              <LanguageSelector />
            </div>
            <ColorSchemeToggle />
            <IconsContainer />
          </div>
        </Navbar>
      )}
    </Transition>
  );
}
