import { useEffect, useState } from 'react';
import { NavLink } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconMail, IconAccessible } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import useStyles from './NavBarNavLinkMenu.styles';

interface NavBarNavLinkMenuProps {
    activeSection: string;
}

export default function NavBarNavLinkMenu({ activeSection }: NavBarNavLinkMenuProps) {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const [localActiveSection, setLocalActiveSection] = useState<string>('');

    useEffect(() => {
        if (activeSection === undefined) return;
        setLocalActiveSection(activeSection);
    }, [activeSection]);

    return (
        <div className={classes.navlinksContainer}>
            <NavLink label={t('home.title')} component="a" href="#home" variant={localActiveSection === 'home' ? 'light' : 'subtle'} active icon={<IconHome2 size={16} stroke={1.5} />} />
            <NavLink label={t('about.title')} component="a" href="#about" variant={localActiveSection === 'about' ? 'light' : 'subtle'} active icon={<IconAccessible size="1rem" stroke={1.5} />} />
            <NavLink label={t('projects.title')} component="a" href="#projects" variant={localActiveSection === 'projects' ? 'light' : 'subtle'} active icon={<IconDeviceAnalytics size="1rem" stroke={1.5} />} />
            {/* <NavLink label={t('services.title')} component="a" href="#services" variant="subtle" active icon={<IconReportMoney size="1rem" stroke={1.5} />} /> */}
            <NavLink label={t('contact.title')} component="a" href="#contact" variant={localActiveSection === 'contact' ? 'light' : 'subtle'} active icon={<IconMail size="1rem" stroke={1.5} />} />
        </div>
    );
}
