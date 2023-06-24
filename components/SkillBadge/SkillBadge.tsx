import { useState } from 'react';
import { Badge } from '@mantine/core';

const animations = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    // and so on... add all available animations here
  ];

  function getRandomAnimation() {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }

export default function SkillBadge() {
    const [animation, setAnimation] = useState('');

    const handleClick = () => {
        setAnimation('');
        const newAnimation = getRandomAnimation();
        setAnimation(`animate__${newAnimation}`);
    };

    return (
        <Badge
          className={`animate__animated ${animation}`}
          onClick={handleClick}
        >
          I&apos;m animated!
        </Badge>
    );
}
