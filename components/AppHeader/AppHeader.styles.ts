import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  burger: {
    // marginRight: theme.spacing.sm,
    [theme.fn.smallerThan('sm')]: {
      size: 'sm',
    },
  },
  header: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
  },
}));
