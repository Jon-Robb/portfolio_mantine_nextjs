import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { fadeOut } from '../animations';

interface FadeOutProps {
  shouldFadeOut: boolean;
  onCompleted?: () => void;
  duration?: number;
  color?: string;
  zIndex?: number;
}

export const FadeOut: React.FC<FadeOutProps> = ({
    shouldFadeOut,
    onCompleted,
    color = 'black',
    duration = 2000,
    zIndex = 1000 }) => {
  const [inProp, setInProp] = useState(!shouldFadeOut);

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
      onExit={onCompleted}
    >
      {(styles) => (
        <div style={{
          ...styles,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: color,
          zIndex,
        }}
        />
      )}
    </Transition>
  );
};
