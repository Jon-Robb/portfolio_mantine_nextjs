import { useEffect, useState, useContext } from 'react';
import useStyles from './BrandAnimation.styles';
import { FadeOut } from '../FadeOut/FadeOut';
import { TextAnimator } from '../TextAnimator/TextAnimator';
import JonlineAnimation from '../JonlineAnimation/JonlineAnimation';
import { EntryAnimationContext } from '../../../contexts/EntryAnimationContext';

interface BrandAnimationProps {
    onCompleted?: () => void;
}

export default function BrandAnimation({ onCompleted }: BrandAnimationProps) {
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [fadeOutCompleted, setFadeOutCompleted] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const { setBrandAnimationCompleted } = useContext(EntryAnimationContext)!;
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
                            setBrandAnimationCompleted(true);
                        }, 1000);
                    }}
                />
            )}
        </>
    );
}
