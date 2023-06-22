import { Navbar, NavLink } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconReportMoney, IconMail, IconAccessible } from '@tabler/icons-react';
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
      <div className={classes.navlinksContainer}>
        <NavLink label="Home" component="a" href="/" variant="subtle" active icon={<IconHome2 size="1rem" stroke={1.5} />} />
        <NavLink label="About" variant="subtle" active icon={<IconAccessible size="1rem" stroke={1.5} />} />
        <NavLink label="Projects" variant="subtle" active icon={<IconDeviceAnalytics size="1rem" stroke={1.5} />} />
        <NavLink label="Services" variant="subtle" active icon={<IconReportMoney size="1rem" stroke={1.5} />} />
        <NavLink label="Contacts" variant="subtle" active icon={<IconMail size="1rem" stroke={1.5} />} />

      </div>
    </Navbar>
  );
}
