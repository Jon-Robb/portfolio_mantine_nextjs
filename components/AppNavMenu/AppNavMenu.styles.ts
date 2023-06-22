import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    fullNavbar: {
        [theme.fn.largerThan('sm')]: { // equivalent to theme.mediaQuery.sm
            height: '100%',
            top: 0,
        },
        height: '50%',
    },
    navlinksContainer: {
        display: 'flex',
        alignItems: 'start',
        width: '100%',
        height: '50%',
        flexDirection: 'column',
    },
}));
