import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    navlinksContainer: {
        display: 'flex',
        alignItems: 'start',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));
