import { useEffect, useState } from 'react';
import { NavLink } from '@mantine/core';
import { IconHome2, IconDeviceAnalytics, IconMail, IconAccessible } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import useStyles from './NavBarNavLinkMenu.styles';

interface NavBarNavLinkMenuProps {
    activeSection: string;
}

type NavLinkType = {
    label: string;
    icon: React.ReactNode;
    description?: string;
    href: string;
    rightSection?: React.ReactNode;
};

export default function NavBarNavLinkMenu({ activeSection }: NavBarNavLinkMenuProps) {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const [localActiveSection, setLocalActiveSection] = useState<string>('');

    const navLinks: NavLinkType[] = [
        {
            label: t('home.title'),
            icon: <IconHome2 size={16} stroke={1.5} />,
            href: 'home',
        },
        {
            label: t('about.title'),
            icon: <IconAccessible size="1rem" stroke={1.5} />,
            href: 'about',
        },
        {
            label: t('projects.title'),
            icon: <IconDeviceAnalytics size="1rem" stroke={1.5} />,
            href: 'projects',
        },
        // {
        //     label: t('services.title'),
        //     icon: <IconReportMoney size="1rem" stroke={1.5} />,
        //     href: '#services',
        // },
        {
            label: t('contact.title'),
            icon: <IconMail size="1rem" stroke={1.5} />,
            href: 'contact',
        },
    ];

    useEffect(() => {
        if (activeSection === undefined) return;
        setLocalActiveSection(activeSection);
    }, [activeSection]);

    return (
        <div className={classes.navlinksContainer}>
            {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.label}
                  className={classes.navlink}
                  label={navLink.label}
                  component="a"
                  href={`#${navLink.href}`}
                  active
                  variant={localActiveSection === navLink.href.toLowerCase() ? 'light' : 'subtle'}
                  icon={navLink.icon}
                />
            ))}
        </div>
    );
}
