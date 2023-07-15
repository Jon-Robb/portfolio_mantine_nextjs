import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        overflow: 'hidden',
    },
    media: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: 5,
        transition: 'opacity 1000ms ease',
        minWidth: 100,
    },
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}));
