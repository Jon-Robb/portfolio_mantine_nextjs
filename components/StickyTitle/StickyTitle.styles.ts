import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: theme.other.blurriedBackgrounds[theme.colorScheme],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
}));
