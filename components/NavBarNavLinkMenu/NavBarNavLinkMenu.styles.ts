import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    navlinksContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        // width: '100%',
        // // [theme.fn.largerThan('sm')]: {
        // //     display: 'none',
        // // },
    },
    navlink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
