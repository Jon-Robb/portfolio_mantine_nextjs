import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '1rem',
        [theme.fn.largerThan('md')]: {
            flexDirection: 'row',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        [theme.fn.largerThan('md')]: {
            justifyContent: 'space-around',
        },
    },
    description: {
        [theme.fn.largerThan('md')]: {
            marginLeft: '1rem',
        },
    },
    buttonGroup: {
        gap: '1rem',
        alignContent: 'center',
        justifyContent: 'center',
    },
}));
