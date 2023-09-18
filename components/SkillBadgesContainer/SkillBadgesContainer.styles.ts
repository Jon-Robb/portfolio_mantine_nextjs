import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginTop: '1rem',
        flexDirection: 'column',
    },
    badgesWrapper: {
        display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100%',
            gap: '0.5rem',
    },
}));
