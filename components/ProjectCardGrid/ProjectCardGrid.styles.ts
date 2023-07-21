import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        columnGap: '1rem',
        rowGap: '1rem',
        margin: '1rem',
        [theme.fn.largerThan('xl')]: {
            gridTemplateColumns: '1fr 1fr',
        },
    },
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
