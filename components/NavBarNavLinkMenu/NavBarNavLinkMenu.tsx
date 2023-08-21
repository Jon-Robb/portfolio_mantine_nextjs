import { NavLink } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconReportMoney, IconMail, IconAccessible } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import useStyles from './NavBarNavLinkMenu.styles';

export default function NavBarNavLinkMenu() {
    const { t } = useTranslation();
    const { classes } = useStyles();
    return (
        <div className={classes.navlinksContainer}>
        <NavLink label={t('home.title')} component="a" href="#home" variant="subtle" active icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label={t('about.title')} component="a" href="#about" variant="subtle" active icon={<IconAccessible size="1rem" stroke={1.5} />} />
        <NavLink label={t('projects.title')} component="a" href="#projects" variant="subtle" active icon={<IconDeviceAnalytics size="1rem" stroke={1.5} />} />
        <NavLink label={t('services.title')} component="a" href="#services" variant="subtle" active icon={<IconReportMoney size="1rem" stroke={1.5} />} />
        <NavLink label={t('contact.title')} component="a" href="#contact" variant="subtle" active icon={<IconMail size="1rem" stroke={1.5} />} />
        </div>
    );
}
