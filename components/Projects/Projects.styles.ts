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
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
    },
    button: {
        flex: 1,
    },
}));
