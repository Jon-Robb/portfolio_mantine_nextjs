import { NavLink } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconReportMoney, IconMail, IconAccessible } from '@tabler/icons-react';
import useStyles from './NavBarNavLinkMenu.styles';

export default function NavBarNavLinkMenu() {
    const { classes } = useStyles();
    return (
        <div className={classes.navlinksContainer}>
        <NavLink label="Home" component="a" href="/" variant="subtle" active icon={<IconHome2 size="1rem" stroke={1.5} />} />
        <NavLink label="About" variant="subtle" active icon={<IconAccessible size="1rem" stroke={1.5} />} />
        <NavLink label="Projects" variant="subtle" active icon={<IconDeviceAnalytics size="1rem" stroke={1.5} />} />
        <NavLink label="Services" variant="subtle" active icon={<IconReportMoney size="1rem" stroke={1.5} />} />
        <NavLink label="Contacts" variant="subtle" active icon={<IconMail size="1rem" stroke={1.5} />} />
        </div>
    );
}
