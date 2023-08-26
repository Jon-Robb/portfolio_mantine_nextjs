import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    navlinksContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
    },
    navlink: {
        transition: 'all 0.3s ease-in-out',
    },
}));
