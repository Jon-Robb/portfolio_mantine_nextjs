import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '1rem',
        height: '100%',
        [theme.fn.largerThan('lg')]: {
            gridTemplateColumns: '1fr 0.5fr',
            gridTemplateRows: '1fr',
        },
    },
    imageWrapper: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // gap: '1rem',
        // width: '100%',
        // height: '50%',
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
        gap: '1rem',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        whiteSpace: 'nowrap',
    },
}));
