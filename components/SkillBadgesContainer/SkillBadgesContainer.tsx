import { SkillBadgeData } from '../../typescript/interfaces/SkillBadgeInterfaces';
import SkillBadge from '../SkillBadge/SkillBadge';

interface SkillBadgeContainerProps {
    skillBadges: SkillBadgeData[];
}

export default function SkillBadgeContainer({ skillBadges }: SkillBadgeContainerProps) {
    const array = skillBadges;
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100%',
            gap: '5px',
        }}
        >
            {array.map((skillBadge: SkillBadgeData, index) => (
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
