import { Transition } from '@mantine/core';

interface TextAnimatorProps {
  animation: any; // Define the type based on Mantine's transition props
  shouldAnimate: boolean;
  text: string;
  duration?: number;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
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
    // TODO: Remove these console.logs
    onEnter = () => console.log(`TextAnimator {${text}} onEnter`),
    onEntered = () => console.log(`TextAnimator {${text}} onEntered`),
    onExit = () => console.log(`TextAnimator {${text}} onExit`),
    onExited = () => console.log(`TextAnimator {${text}} onExited`),
    shouldAnimate,
    fontSize = '5rem',
    color = 'white',
    textShadow = '0 0 10px white',
    zIndex = 2000,
    fontWeight = 400,
}) => (
    <Transition
      transition={animation}
      duration={duration}
      timingFunction="ease"
      mounted={shouldAnimate}
      onEntered={onEntered}
      onEnter={onEnter}
      onExit={onExit}
      onExited={onExited}
    >
      {(styles) => (
        <div style={{
            ...styles,
            color,
            fontSize,
            textShadow,
            zIndex,
            fontWeight,
            margin: 0,
            padding: 0,
        }}
        >
          {text}
        </div>
      )}
    </Transition>
  );
