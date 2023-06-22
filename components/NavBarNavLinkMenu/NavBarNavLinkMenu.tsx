import { NavLink, Anchor, Text } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconReportMoney, IconMail, IconAccessible } from '@tabler/icons-react';
import useStyles from './NavBarNavLinkMenu.styles';

export default function NavBarNavLinkMenu() {
    const { classes } = useStyles();
    return (
        <div className={classes.navlinksContainer}>
        <Text className={classes.titleName}> <Anchor href="/"> Jonathan Robinson </Anchor> </Text>
        <NavLink className={classes.navlink} label="Home" component="a" href="/" variant="subtle" active icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink className={classes.navlink} label="About" component="a" href="/" variant="subtle" active icon={<IconAccessible size="1rem" stroke={1.5} />} />
        <NavLink className={classes.navlink} label="Projects" component="a" href="/" variant="subtle" active icon={<IconDeviceAnalytics size="1rem" stroke={1.5} />} />
        <NavLink className={classes.navlink} label="Services" component="a" href="/" variant="subtle" active icon={<IconReportMoney size="1rem" stroke={1.5} />} />
        <NavLink className={classes.navlink} label="Contact" component="a" href="/" variant="subtle" active icon={<IconMail size="1rem" stroke={1.5} />} />
        </div>
    );
}
