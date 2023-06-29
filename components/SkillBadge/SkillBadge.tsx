import { useEffect, useState } from 'react';
// import { useMediaQuery } from '@mantine/hooks';
import { Badge } from '@mantine/core';
import { AnimateCssKeys } from '../../animation/AnimateCssKeys';
import { cssColors } from './CssColors';
import { useScreenSize } from '../../hooks/useScreenSize';
import { colorIsBright, getHexColor } from '../../utils/color';
import { GradientColors, SkillBadgeData } from '../../typescript/interfaces/SkillBadgeInterfaces';

export default function SkillBadge({
  label,
  leftIcon,
  rightIcon,
  color,
  randomGradient = true,
  animated = true }:
  SkillBadgeData) {
  const [animation, setAnimation] = useState<string>('');
  const [gradientColors, setGradientColors] = useState<GradientColors>({} as GradientColors);
  const [textColor, setTextColor] = useState<string>('');
  const screenSize:string = useScreenSize();
  const animations: string[] = AnimateCssKeys;
  // const isMobile:boolean = useMediaQuery('(max-width: 768px)');

  const getRandomAnimation = () : string => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return AnimateCssKeys[randomIndex];
  };

  const getRandomColor = () : string => {
    const randomIndex = Math.floor(Math.random() * cssColors.length);
    return cssColors[randomIndex];
  };

  const handleAnimation = () : void => {
    const newAnimation = getRandomAnimation();
    setAnimation(`animate__${newAnimation}`);
  };

  useEffect(() => {
    if (randomGradient) {
      const color1 = getRandomColor();
      let color2 = getRandomColor();
      while (color1 === color2) {
        color2 = getRandomColor();
      }
      setGradientColors({ from: color1, to: color2 });
      setTextColor(colorIsBright(getHexColor(color1)) || colorIsBright(getHexColor(color2)) ? 'black' : 'white');
    }
  }, [animated, randomGradient]);

  return (
    <Badge
      className={`animate__animated ${animation}`}
      // onMouseEnter={isMobile && animated ? undefined : handleAnimation}
      // onClick={isMobile && animated ? handleAnimation : undefined}
      onClick={animated ? handleAnimation : undefined}
      style={animated ? { cursor: 'pointer' } : { cursor: 'default' }}
      leftSection={leftIcon}
      rightSection={rightIcon}
      color={color}
      variant={randomGradient ? 'gradient' : 'filled'}
      gradient={gradientColors}
      pl={10}
      size={screenSize}
      radius={screenSize}
      styles={{
        root: { color: textColor },
        leftSection: { display: 'flex', alignItems: 'center',
        },
      }}
    >
      {label}
    </Badge>
  );
}
