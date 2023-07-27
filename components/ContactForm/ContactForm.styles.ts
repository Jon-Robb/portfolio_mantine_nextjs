import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        gap: '1rem',
        padding: '1rem',
        width: '100%',
        [theme.fn.largerThan('sm')]: {
            width: '85%',
        },
        [theme.fn.largerThan('md')]: {
            width: '75%',
        },
        [theme.fn.largerThan('lg')]: {
            width: '65%',
        },
        [theme.fn.largerThan('xl')]: {
            width: '55%',
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        width: '100%',
    },
    button: {
        margin: '0 25%',
    },
}));
