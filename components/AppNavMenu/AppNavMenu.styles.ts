import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    fullNavbar: {
        [theme.fn.largerThan('sm')]: { // equivalent to theme.mediaQuery.sm
            height: '100%',
            top: 0,
            },
    },
}));
