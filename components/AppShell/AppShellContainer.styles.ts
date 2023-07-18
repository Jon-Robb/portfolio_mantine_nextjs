import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    appshell: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
}));
