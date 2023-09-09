import { Burger, Header, Title, Anchor, useMantineTheme, Transition } from '@mantine/core';
import { useContext } from 'react';
import { EntryAnimationContext } from '../../contexts/EntryAnimationContext';
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
  const { entryAnimationCompleted } = useContext(EntryAnimationContext)!;
  return (
    <Header height={{ base: 50, md: 70 }} p="md" className={classes.header}>
      <Transition transition="pop" duration={1000} timingFunction="ease" mounted={entryAnimationCompleted} keepMounted>
        {(styles) => (
          <div
            style={styles}
            className={classes.headerContainer}
          >
            <Title order={3}>
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
        )}
      </Transition>
    </Header>
  );
}
