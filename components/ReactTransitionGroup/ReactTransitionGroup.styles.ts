import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    enter: {
        opacity: 0,
    },
    enterActive: {
        opacity: 1,
        transition: 'opacity 500ms ease-in',
    },
    exit: {
        opacity: 1,
    },
    exitActive: {
        opacity: 0,
        transition: 'opacity 500ms ease-in',
    },
}));
