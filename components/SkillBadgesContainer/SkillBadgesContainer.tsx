import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { SkillBadgeData } from '../../typescript/interfaces/SkillBadgeInterfaces';
import SkillBadge from '../SkillBadge/SkillBadge';
import useStyles from './SkillBadgesContainer.styles';

interface SkillBadgeContainerProps {
    skillBadges: SkillBadgeData[];
}

export default function SkillBadgeContainer({ skillBadges }: SkillBadgeContainerProps) {
    const { classes } = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.wrapper}>
            <Title order={3}>
                {t('about.skills')}
            </Title>
            <div className={classes.badgesWrapper}>
                {skillBadges.map((skillBadge: SkillBadgeData, index) => (
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
        </div>
    );
}
