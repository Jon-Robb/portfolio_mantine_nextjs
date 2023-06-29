import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Badge } from '@mantine/core';
import { AnimateCssKeys } from '../../animation/AnimateCssKeys';
import { cssColors } from './CssColors';
// import { getScreenSize } from '../../utils/screen';
import { useScreenSize } from '../../hooks/useScreenSize';

interface SkillBadgeProps {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  color?: string;
  randomGradient?: boolean;
  animated?: boolean;
}

interface GradientColors {
  from: string;
  to: string;
}

export default function SkillBadge({
  label,
  leftIcon,
  rightIcon,
  color,
  randomGradient = true,
  animated = true }:
  SkillBadgeProps) {
  const [animation, setAnimation] = useState('');
  const [gradientColors, setGradientColors] = useState<GradientColors>({} as GradientColors);
  // const [screenSize, setScreenSize] = useState<string>();
  const screenSize = useScreenSize();
  const animations: string[] = AnimateCssKeys;
  const isMobile = useMediaQuery('(max-width: 768px)');

  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return AnimateCssKeys[randomIndex];
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * cssColors.length);
    return cssColors[randomIndex];
  };

  const handleAnimation = () => {
    const newAnimation = getRandomAnimation();
    setAnimation(`animate__${newAnimation}`);
  };

  // trigger animation on mount
  // useEffect(() => {
  //   if (animated) {
  //     handleAnimation();
  //   }
  // }, [animated]);

  useEffect(() => {
    if (randomGradient) {
      const color1 = getRandomColor();
      let color2 = getRandomColor();
      while (color1 === color2) {
        color2 = getRandomColor();
      }
      setGradientColors({ from: color1, to: color2 });
    }

    // setScreenSize(getScreenSize());
  }, []);

  return (
    <Badge
      className={`animate__animated ${animation}`}
      onMouseEnter={isMobile && animated ? undefined : handleAnimation}
      onClick={isMobile && animated ? handleAnimation : undefined}
      style={{ cursor: 'wait' }}
      leftSection={leftIcon}
      rightSection={rightIcon}
      color={color}
      variant={randomGradient ? 'gradient' : 'filled'}
      gradient={gradientColors}
      pl={10}
      size={screenSize}
      radius={screenSize}
      styles={{ leftSection: { display: 'flex', alignItems: 'center' } }}
    >
      {label || 'Badge'}
    </Badge>
  );
}
