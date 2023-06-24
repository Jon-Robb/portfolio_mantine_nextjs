import { useState } from 'react';
import { Badge } from '@mantine/core';
import { AnimateCssKeys } from '../../animation/AnimateCssKeys';

export default function SkillBadge() {
    const [animation, setAnimation] = useState('');
    const animations: string[] = AnimateCssKeys;

    const getRandomAnimation = () => {
        const randomIndex = Math.floor(Math.random() * animations.length);
        return AnimateCssKeys[randomIndex];
    };

    const handleMouseEnter = () => {
        setAnimation('');
        const newAnimation = getRandomAnimation();
        setAnimation(`animate__${newAnimation}`);
    };

    return (
        <Badge
          className={`animate__animated ${animation}`}
          onMouseEnter={handleMouseEnter}
          style={{ cursor: 'wait' }}
        >
          I&apos;m animated!
        </Badge>
    );
}
