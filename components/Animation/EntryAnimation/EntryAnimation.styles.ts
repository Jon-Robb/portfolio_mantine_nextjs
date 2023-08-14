import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // TODO: make z index layers more consistent in a separate file
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        // fontSize: '3rem',
        color: 'white',
        textShadow: '0 0 10px black',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
}));
