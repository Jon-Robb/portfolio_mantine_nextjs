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

export default function JonlineAnimation({
    fnOnceDone, inProp }: { fnOnceDone?: () => void, inProp: boolean }) {
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
                  onEntered={index === jonlineAnimation.length - 1 ? fnOnceDone : undefined}
                />
            ))}
        </div>
    );
}