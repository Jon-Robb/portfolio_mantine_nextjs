// components/FadeOut.tsx

import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';

interface FadeOutProps {
  shouldFadeOut: boolean;
  onCompleted?: () => void;
  duration?: number;
  color?: string;
}

export const FadeOut: React.FC<FadeOutProps> = ({
    shouldFadeOut,
    onCompleted,
    color = 'black',
    duration = 2000 }) => {
  const [inProp, setInProp] = useState(!shouldFadeOut);

  const fadeOut = {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: 'opacity',
  };

  useEffect(() => {
    if (shouldFadeOut) {
      setInProp(false);
    }
  }, [shouldFadeOut]);

  return (
    <Transition
      transition={fadeOut}
      duration={duration}
      mounted={inProp}
      timingFunction="ease"
      onExited={onCompleted}
    >
      {(styles) => (
        <div style={{
          ...styles,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          background: color,
        }}
        />
      )}
    </Transition>
  );
};
