import { Transition } from '@mantine/core';

interface TextAnimatorProps {
  animation: any; // Define the type based on Mantine's transition props
  shouldAnimate: boolean;
  text: string;
  duration?: number;
  onCompleted?: () => void;
  fontSize?: string;
  color?: string;
  textShadow?: string;
  zIndex?: number;
  fontWeight?: number;
}

export const TextAnimator: React.FC<TextAnimatorProps> = ({
    animation,
    duration = 2000,
    text,
    onCompleted,
    shouldAnimate,
    fontSize = '3rem',
    color = 'white',
    textShadow = '0 0 10px black',
    zIndex = 2000,
    fontWeight = 400,
}) => (
    <Transition
      transition={animation}
      duration={duration}
      timingFunction="ease"
      onExited={onCompleted}
      mounted={shouldAnimate}
    >
      {(styles) => (
        <div style={{
            ...styles,
            color,
            fontSize,
            textShadow,
            zIndex,
            fontWeight,
        }}
        >
          {text}
        </div>
      )}
    </Transition>
  );
