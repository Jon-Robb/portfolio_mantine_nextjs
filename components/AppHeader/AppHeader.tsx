import { Burger, Header, Text, Anchor, useMantineTheme } from '@mantine/core';
import useStyles from './AppHeader.styles';

interface AppHeaderProps {
    headerTitle?: string;
    anchorLink?: string;
    titleIsAnchor?: boolean;
    onClick: () => any;
    opened: boolean;
}

export default function AppHeader({
    headerTitle = 'Jonathan Robinson',
    anchorLink = '/',
    titleIsAnchor = true,
    onClick,
    opened,
}: AppHeaderProps) {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    return (
        <Header height={{ base: 50, md: 70 }} p="md" className={classes.header}>
            <div className={classes.headerContainer}>
                <Text>
                {titleIsAnchor ? <Anchor href={anchorLink}> {headerTitle} </Anchor> : headerTitle}
                </Text>
                <Burger
                  opened={opened}
                  onClick={onClick}
                  size="sm"
                  color={theme.colors.gray[6]}
                  className={classes.burger}
                />
            </div>
        </Header>
    );
}
