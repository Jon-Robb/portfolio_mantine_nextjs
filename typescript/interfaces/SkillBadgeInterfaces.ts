export interface SkillBadgeProps {
    label: string;
    leftIcon: React.ReactNode;
    rightIcon?: React.ReactNode;
    color?: string;
    randomGradient?: boolean;
    animated?: boolean;
}

export interface GradientColors {
    from: string;
    to: string;
}
