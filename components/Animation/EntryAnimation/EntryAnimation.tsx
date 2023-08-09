import { useEffect, useState } from 'react';
import useStyles from './EntryAnimation.styles';

export default function EntryAnimation() {
    const { classes } = useStyles();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(0);
    }, []);

    return (
        <div className={classes.fadeInWrapper} style={{ opacity }}>
            Fade in wrapper
        </div>
    );
}
