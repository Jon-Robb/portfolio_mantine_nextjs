import { SkillBadgeData } from '../../typescript/interfaces/SkillBadgeInterfaces';
import SkillBadge from '../SkillBadge/SkillBadge';
import { shuffleArray } from '../../utils/array';

interface SkillBadgeContainerProps {
    skillBadges: SkillBadgeData[];
}

export default function SkillBadgeContainer({ skillBadges }: SkillBadgeContainerProps) {
    const shuffledArray: any[] = shuffleArray(skillBadges);
    return (
        <div>
            {shuffledArray.map((skillBadge: SkillBadgeData, index) => (
                <SkillBadge
                  key={index}
                  label={skillBadge.label}
                  leftIcon={skillBadge.leftIcon}
                  rightIcon={skillBadge.rightIcon}
                  color={skillBadge.color}
                  randomGradient={skillBadge.randomGradient}
                  animated={skillBadge.animated}
                />
            ))}
        </div>
    );
}
