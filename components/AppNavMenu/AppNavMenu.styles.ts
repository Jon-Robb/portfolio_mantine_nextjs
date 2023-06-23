import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    fullNavbar: {
        [theme.fn.largerThan('sm')]: { // equivalent to theme.mediaQuery.sm
            height: '100%',
            top: 0,
            },
    },
    titleName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    navMenuContainer: {
        display: 'grid',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        marginTop: '1rem',
        gap: '1rem',
        // [theme.fn.smallerThan('sm')]: {
        //     display: 'none',
        // },
    },
}));