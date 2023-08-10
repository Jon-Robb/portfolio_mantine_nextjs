import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';

export default function EntryAnimation() {
    const [inProp, setInProp] = useState(false);
    const [isUnmounted, setIsUnmounted] = useState(false);

    const fadeIn = {
        in: { opacity: 0 },
        out: {},
        transitionProperty: 'opacity',
    };

    useEffect(() => {
        setInProp(true);
    }, []);

    return !isUnmounted ? (
        <Transition transition={fadeIn} duration={2000} mounted={inProp} timingFunction="ease" onEntered={() => setIsUnmounted(true)}>
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
    ) : null;
}
