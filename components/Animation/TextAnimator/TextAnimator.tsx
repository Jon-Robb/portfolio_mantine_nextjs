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
// TODO: names more consistently with other components
export const TextAnimator: React.FC<TextAnimatorProps> = ({
    animation,
    duration = 2000,
    text,
    onEnter,
    onEntered,
    onExit,
    onExited,
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
      keepMounted
      onEntered={onEntered}
      onEnter={onEnter}
      onExit={onExit}
      onExited={onExited}
    >
      {(styles) => (
        <span style={{
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
        </span>
      )}
    </Transition>
  );
