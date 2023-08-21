import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        display: 'grid',
        flexDirection: 'column',
        gap: '1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '1rem',
        height: '100%',
        [theme.fn.largerThan('lg')]: {
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr',
        },
    },
    imageWrapper: {
        height: '10rem',
        [theme.fn.largerThan('lg')]: {
            height: '15rem',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        // [theme.fn.largerThan('md')]: {
        //     justifyContent: 'space-around',
        // },
    },
    description: {
        [theme.fn.largerThan('md')]: {
            marginLeft: '1rem',
        },
    },
    buttonGroup: {
        width: '100%',
        gap: '1rem',
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
    },
    title: {
        whiteSpace: 'nowrap',
    },
}));
