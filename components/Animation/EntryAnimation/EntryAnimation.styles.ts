import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    fadeInWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        background: 'black',
        pointerEvents: 'none',
        transition: 'opacity 2000ms ease',
    },
}));
