import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { FadeOut } from '../FadeOut/FadeOut';
import { TextAnimator } from '../TextAnimator/TextAnimator';

export default function EntryAnimation() {
    const [shouldStartFadeOut, setShouldStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
        console.log('startAnimation set to true', startAnimation);
    }, []);

    useEffect(() => {
        setAnimationCompleted(fadeOutCompleted);
    }, [fadeOutCompleted]);

    return !animationCompleted ? (
        <>
            <div style={{
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
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                >
                    <TextAnimator
                      animation="slide-right"
                      shouldAnimate={startAnimation}
                      text="RobLine"
                      onEntered={() => console.log('Robline animation completed')}
                    />
                    {/* <Transition
                      transition="slide-right"
                      duration={2000}
                      timingFunction="ease"
                      onEntered={() => console.log('Robline animation completed')}
                      mounted={startAnimation}
                    >
                        {(styles) => (
                            <h1 style={{
                                ...styles,
                                color: 'white',
                                textShadow: '0 0 10px white',
                                margin: 0,
                                padding: 0,
                            }}
                            >
                                RobLine
                            </h1>
                        )}
                    </Transition> */}
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
