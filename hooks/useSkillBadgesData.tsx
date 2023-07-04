import { useState, useEffect } from 'react';
import { IconBrandReact, IconBrandCpp, IconBrandCSharp, IconBrandCss3, IconBrandHtml5, IconBrandMysql, IconBrandVue, IconBrandPhp, IconBrandJavascript, IconBrandTypescript, IconBrandPython, IconBrandWindows, IconBrandAndroid, IconBrandGit, IconBrandGithub, IconMessageChatbot, IconBrandGoogle, IconBrandFigma, IconBrandNextjs, IconBrandVite, IconBrandUnity, IconDatabase, IconBrandMongodb } from '@tabler/icons-react';
import { SkillBadgeData } from '../typescript/interfaces/SkillBadgeInterfaces';
import { useScreenSize } from './useScreenSize';
import { shuffleArray } from '../utils/array';

const iconSizes : Record<string, number> = {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
};

export const useSkillBadgesData = (): SkillBadgeData[] => {
    const [skillBadgesData, setSkillBadgesData] = useState<SkillBadgeData[]>([]);
    const iconSize = iconSizes[useScreenSize()];

    useEffect(() => {
        const data: SkillBadgeData[] = [
            {
                label: 'React',
                leftIcon: <IconBrandReact size={iconSize} />,
            },
            {
                label: 'CPP ',
                leftIcon: <IconBrandCpp size={iconSize} />,
            },
            {
                label: 'C#',
                leftIcon: <IconBrandCSharp size={iconSize} />,
            },
            {
                label: 'CSS',
                leftIcon: <IconBrandCss3 size={iconSize} />,
            },
            {
                label: 'HTML',
                leftIcon: <IconBrandHtml5 size={iconSize} />,
            },
            {
                label: 'MySQL',
                leftIcon: <IconBrandMysql size={iconSize} />,
            },
            {
                label: 'Vue',
                leftIcon: <IconBrandVue size={iconSize} />,
            },
            {
                label: 'PHP',
                leftIcon: <IconBrandPhp size={iconSize} />,
            },
            {
                label: 'Javascript',
                leftIcon: <IconBrandJavascript size={iconSize} />,
            },
            {
                label: 'Typescript',
                leftIcon: <IconBrandTypescript size={iconSize} />,
            },
            {
                label: 'Python',
                leftIcon: <IconBrandPython size={iconSize} />,
            },
            {
                label: 'Active Directory',
                leftIcon: <IconBrandWindows size={iconSize} />,
            },
            {
                label: 'Java Android',
                leftIcon: <IconBrandAndroid size={iconSize} />,
            },
            {
                label: 'Git',
                leftIcon: <IconBrandGit size={iconSize} />,
            },
            {
                label: 'Github',
                leftIcon: <IconBrandGithub size={iconSize} />,
            },
            {
                label: 'AI prompts',
                leftIcon: <IconMessageChatbot size={iconSize} />,
            },
            {
                label: 'Google',
                leftIcon: <IconBrandGoogle size={iconSize} />,
            },
            {
                label: 'Figma',
                leftIcon: <IconBrandFigma size={iconSize} />,
            },
            {
                label: 'NextJS',
                leftIcon: <IconBrandNextjs size={iconSize} />,
            },
            {
                label: 'Vite',
                leftIcon: <IconBrandVite size={iconSize} />,
            },
            {
                label: 'Unity',
                leftIcon: <IconBrandUnity size={iconSize} />,
            },
            {
                label: 'SQL',
                leftIcon: <IconDatabase size={iconSize} />,
            },
            {
                label: 'MongoDB',
                leftIcon: <IconBrandMongodb size={iconSize} />,
            },
        ];
        const shuffledData = shuffleArray([...data]);
        setSkillBadgesData(shuffledData);
    }, [iconSize]);

    return skillBadgesData;
};
