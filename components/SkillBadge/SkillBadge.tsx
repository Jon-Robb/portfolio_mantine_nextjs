import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Badge } from '@mantine/core';
import { AnimateCssKeys } from '../../animation/AnimateCssKeys';

interface SkillBadgeProps {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  color?: string;
  gradient?: boolean;
  animated?: boolean;
  gradientColors?: string[];
}

export default function SkillBadge({
  label,
  leftIcon,
  rightIcon,
  color,
  gradient,
  animated = true,
  gradientColors }:
  SkillBadgeProps) {
  const [animation, setAnimation] = useState('');
  const animations: string[] = AnimateCssKeys;
  const isMobile = useMediaQuery('(max-width: 768px)');

  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return AnimateCssKeys[randomIndex];
  };

  const handleAnimation = () => {
    setAnimation('');
    const newAnimation = getRandomAnimation();
    setAnimation(`animate__${newAnimation}`);
  };

  return (
    <Badge
      className={`animate__animated ${animation}`}
      onMouseEnter={isMobile && animated ? undefined : handleAnimation}
      onClick={isMobile && animated ? handleAnimation : undefined}
      style={{ cursor: 'wait' }}
      leftSection={leftIcon}
      rightSection={rightIcon}
      color={color}
      variant={gradient ? 'gradient' : 'filled'}
      // gradient={{ from: gradientColors[0] ?? '', to: gradientColors[1] ?? '' }}
    >
      {label}
    </Badge>
  );
}
