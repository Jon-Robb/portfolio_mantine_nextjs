import { Burger, Header, Title, Anchor, useMantineTheme } from '@mantine/core';
import useStyles from './AppHeader.styles';

interface AppHeaderProps {
    headerTitle?: string;
    anchorLink?: string;
    titleIsAnchor?: boolean;
    onClick: () => any;
    opened: boolean;
    triggerFadeIn?: boolean;
}

export default function AppHeader({
    headerTitle = 'Jonathan Robinson',
    anchorLink = '/',
    titleIsAnchor = true,
    onClick,
    opened,
    triggerFadeIn,
}: AppHeaderProps) {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    return (
        <Header height={{ base: 50, md: 70 }} p="md" className={classes.header}>
            <div
              className={classes.headerContainer}
              style={{
                opacity: triggerFadeIn && triggerFadeIn ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
              }}
            >
                <Title order={2}>
                {titleIsAnchor ? <Anchor href={anchorLink}> {headerTitle} </Anchor> : headerTitle}
                </Title>
                <Burger
                  title="Open navigation menu"
                  aria-label="Open navigation menu"
                  opened={opened}
                  onClick={onClick}
                  size="md"
                  color={theme.colors.gray[6]}
                  className={classes.burger}
                />
            </div>
        </Header>
    );
}
