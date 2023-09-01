import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    carouselContainer: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textWrapper: {
        width: '100%',
    },
    text: {
        cursor: 'pointer',
    },
}));
