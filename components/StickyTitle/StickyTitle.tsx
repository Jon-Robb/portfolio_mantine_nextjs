import { Title } from '@mantine/core';
import useStyles from './StickyTitle.styles';

interface IStickyTitleProps {
    title: string;
}

export default function StickyTitle({ title }: IStickyTitleProps) {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Title order={2}> {title} </Title>
        </div>
    );
}
