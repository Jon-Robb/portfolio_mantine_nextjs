import { useEffect, useState } from 'react';
import useStyles from './EntryAnimation.styles';

export default function EntryAnimation() {
    const [opacity, setOpacity] = useState(1);
    const { classes } = useStyles();

    useEffect(() => {
        setOpacity(0);
    }, [opacity]);

    return (
        <div className={classes.fadeInWrapper} style={{ opacity }} />
    );
}
