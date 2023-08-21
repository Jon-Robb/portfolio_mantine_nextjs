import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({

    fullNavbar: {
        [theme.fn.largerThan('sm')]: { // equivalent to theme.mediaQuery.sm
            height: '100%',
            top: 0,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            border: 'none',
            },
        [theme.fn.smallerThan('sm')]: {
            backdropFilter: 'blur(10px)',
            backgroundColor: theme.other.blurriedBackgrounds[theme.colorScheme],
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
