import { useEffect, useState } from 'react';
import { FadeOut } from '../FadeOut/FadeOut';
import { TextAnimator } from '../TextAnimator/TextAnimator';
import JonlineAnimation, { jonlineAnimation } from '../JonlineAnimation/JonlineAnimation';

export default function EntryAnimation() {
    const [shouldStartFadeOut, setShouldStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    useEffect(() => {
        setAnimationCompleted(fadeOutCompleted);
    }, [fadeOutCompleted]);

    return !animationCompleted ? (
        <>
            <div
              style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 2000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{
                    fontSize: '3rem',
                    color: 'white',
                    textShadow: '0 0 10px black',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                >
                    <div>
                        <JonlineAnimation />
                    </div>
                </div>
            </div>
            {!fadeOutCompleted && (
                <FadeOut
                  shouldFadeOut={shouldStartFadeOut}
                  onCompleted={() => setFadeOutCompleted(true)}
                />
            )}
        </>
    ) : null;
}
