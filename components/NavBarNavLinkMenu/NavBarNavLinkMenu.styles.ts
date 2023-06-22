import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    navlinksContainer: {
        display: 'flex',
        alignItems: 'start',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        marginTop: '1rem',
        paddingTop: '1rem',
        // [theme.fn.largerThan('sm')]: {
        //     display: 'none',
        // },
    },
    navlink: {
        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.xs,
        },
        [theme.fn.smallerThan('md')]: {
            fontSize: theme.fontSizes.sm,
        },
        [theme.fn.smallerThan('lg')]: {
            fontSize: theme.fontSizes.md,
        },
        [theme.fn.smallerThan('xl')]: {
            fontSize: theme.fontSizes.lg,
        },
        [theme.fn.largerThan('xl')]: {
            fontSize: theme.fontSizes.xl,
        },
    },
    titleName: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));
