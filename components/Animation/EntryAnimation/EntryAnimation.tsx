import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';

export default function EntryAnimation() {
    const [inProp, setInProp] = useState(false);

    const fadeIn = {
        in: { opacity: 0 },
        out: { opacity: 1 },
        transitionProperty: 'opacity',
    };

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <Transition transition={fadeIn} duration={2000} mounted={inProp} timingFunction="ease">
            {(styles) => <div style={{
                ...styles,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1000,
                background: 'black',
                pointerEvents: 'none',
            }}
            />}
        </Transition>
    );
}
