import { useEffect, useState, useContext } from 'react';
import useStyles from './EntryAnimation.styles';
import { FadeOut } from '../FadeOut/FadeOut';
import { TextAnimator } from '../TextAnimator/TextAnimator';
import JonlineAnimation from '../JonlineAnimation/JonlineAnimation';
import { EntryAnimationCompletedContext } from '../../../contexts/EntryAnimationCompletedContext';

interface EntryAnimationProps {
    onCompleted?: () => void;
}

export default function EntryAnimation({ onCompleted }: EntryAnimationProps) {
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const { setEntryAnimationCompleted } = useContext(EntryAnimationCompletedContext)!;
    const { classes } = useStyles();

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.textContainer}>
                    <JonlineAnimation inProp={startAnimation} />
                    <TextAnimator
                      animation="pop"
                      shouldAnimate={startAnimation}
                      text="Dynamics"
                      onEntered={() => {
                            setStartFadeOut(true);
                            setStartAnimation(false);
                        }}
                    />
                </div>
            </div>
            {!fadeOutCompleted && (
                <FadeOut
                  shouldFadeOut={startFadeOut}
                  onCompleted={() => {
                        setFadeOutCompleted(true);
                        onCompleted && onCompleted();
                        setTimeout(() => {
                            setEntryAnimationCompleted(true);
                        }, 1000);
                    }}
                />
            )}
        </>
    );
}
