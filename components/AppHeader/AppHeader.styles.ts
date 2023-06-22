import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  burger: {
    marginRight: theme.spacing.sm,
  },
  header: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: { // equivalent to theme.mediaQuery.sm
      display: 'block',
    },
  },
}));
