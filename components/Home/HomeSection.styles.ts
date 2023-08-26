import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        justifyContent: 'flex-start',
        gap: '5rem',
        [theme.fn.largerThan('sm')]: {
            paddingTop: '10rem',
            gap: '10rem',
            // fontSize: theme.fontSizes.lg,
        },
        [theme.fn.largerThan('lg')]: {
            padding: '10rem 10rem 0 10rem',
            gap: '10rem',
        },
        '@media screen and (min-width: 1000px) and (max-height: 615px)': {
            padding: 0,
            margin: 0,
            fontSize: theme.fontSizes.xs,
            gap: '5rem',
        },
        '@media screen and (min-width: 1250px) and (max-height: 815px)': {
            paddingTop: '5rem',
            fontSize: theme.fontSizes.sm,
        },
    },
}));
