import { Navbar, Anchor, Text, Transition } from '@mantine/core';
import { useContext } from 'react';
import { EntryAnimationContext } from '../../contexts/EntryAnimationContext';
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
  const { entryAnimationCompleted } = useContext(EntryAnimationContext)!;

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 275, lg: 300 }} className={classes.fullNavbar}>
      <Transition transition="fade" duration={1000} timingFunction="ease" mounted={entryAnimationCompleted} keepMounted>
        {(styles) => (
          <div style={styles} className={classes.navMenuContainer}>
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
