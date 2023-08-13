import { useEffect, useState } from 'react';
import { FadeOut } from '../FadeOut/FadeOut';
import { TextAnimator } from '../TextAnimator/TextAnimator';
import JonlineAnimation from '../JonlineAnimation/JonlineAnimation';

export default function EntryAnimation() {
    const [shouldStartFadeOut, setShouldStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const [jolineAnimationCompleted, setJolineAnimationCompleted] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    useEffect(() => {
        console.log('jolineAnimationCompleted', jolineAnimationCompleted);
    }, [jolineAnimationCompleted]);

    const handleJolineDone = () => {
        setJolineAnimationCompleted(true);
    };

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
                    // TODO: make z index layers more consistent in a separate file
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
                    flexDirection: 'column',
                }}
                >
                    <JonlineAnimation inProp={startAnimation} fnOnceDone={handleJolineDone} />
                    <div style={{ opacity: jolineAnimationCompleted ? 1 : 0, transition: 'opacity 0.5s' }}>
                        <TextAnimator animation="pop" shouldAnimate={jolineAnimationCompleted} text="Dynamics"
                        // onEntered={() => setShouldStartFadeOut(true)}
                        />
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
