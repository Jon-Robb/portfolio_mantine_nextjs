import { TextAnimator } from '../TextAnimator/TextAnimator';

type letterAnimation = {
    letter: string;
    animation: string;
};

const jonlineAnimation: letterAnimation[] = [
    { letter: 'J', animation: 'slide-right' },
    { letter: 'o', animation: 'pop-bottom-left' },
    { letter: 'n', animation: 'rotate-left' },
    { letter: 'L', animation: 'slide-up' },
    { letter: 'i', animation: 'rotate-right' },
    { letter: 'n', animation: 'pop-bottom-right' },
    { letter: 'e', animation: 'slide-left' },
];

interface JonlineAnimationProps {
    inProp: boolean;
    onEntered?: () => void;
    onEnter?: () => void;
    onExit?: () => void;
    onExited?: () => void;
}
// \TODO: NAmes more consistently with other components and put style in its file
export default function JonlineAnimation(props : JonlineAnimationProps) {
    const { inProp, onEnter, onEntered, onExit, onExited } = props;
    return (
        <div
          style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {jonlineAnimation.map((la: letterAnimation, index: number) => (
                <TextAnimator
                  key={index}
                  animation={la.animation}
                  shouldAnimate={inProp}
                  text={la.letter}
                  onEnter={index === 0 ? onEnter : undefined}
                  onEntered={index === jonlineAnimation.length - 1 ? onEntered : undefined}
                  onExit={index === 0 ? onExit : undefined}
                  onExited={index === jonlineAnimation.length - 1 ? onExited : undefined}
                />
            ))}
        </div>
    );
}
