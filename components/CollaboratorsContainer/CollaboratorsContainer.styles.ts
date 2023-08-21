import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        marginTop: '1rem',
    },
    text: {
    },
    collaboratorsContainer: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        gap: '0.5rem',
    },
}));
