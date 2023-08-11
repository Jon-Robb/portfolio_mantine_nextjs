import { useEffect, useState } from 'react';
import { FadeOut } from '../FadeOut/FadeOut';

export default function EntryAnimation() {
    const [shouldStartFadeOut, setShouldStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShouldStartFadeOut(true);
    //     }, 5000);
    // }, []);

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
                    <h1> RobLine </h1>
                    <h1> Technologies </h1>
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
