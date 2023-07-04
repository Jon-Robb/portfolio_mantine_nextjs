import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '1rem',
    },
    buttonGroup: {
        gap: '1rem',
    },
}));
