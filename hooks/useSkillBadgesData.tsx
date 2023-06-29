import { useState, useEffect } from 'react';
import { IconBrandReact, IconBrandCpp, IconBrandCSharp, IconBrandCss3, IconBrandHtml5, IconBrandMysql, IconBrandVue, IconBrandPhp, IconBrandJavascript, IconBrandTypescript, IconBrandPython, IconBrandWindows, IconBrandAndroid, IconBrandGit, IconBrandGithub, IconMessageChatbot, IconBrandGoogle, IconBrandFigma, IconBrandNextjs, IconBrandVite, IconBrandUnity, IconDatabase } from '@tabler/icons-react';
import { SkillBadgeData } from '../typescript/interfaces/SkillBadgeInterfaces';

export const useSkillBadgesData = (): SkillBadgeData[] => {
    const [skillBadgesData, setSkillBadgesData] = useState<SkillBadgeData[]>([]);

    useEffect(() => {
        const data: SkillBadgeData[] = [
            {
                label: 'React',
                leftIcon: <IconBrandReact size={16} />,
            },
            {
                label: 'CPP ',
                leftIcon: <IconBrandCpp size={16} />,
            },
            {
                label: 'C#',
                leftIcon: <IconBrandCSharp size={16} />,
            },
            {
                label: 'CSS',
                leftIcon: <IconBrandCss3 size={16} />,
            },
            {
                label: 'HTML',
                leftIcon: <IconBrandHtml5 size={16} />,
            },
            {
                label: 'MySQL',
                leftIcon: <IconBrandMysql size={16} />,
            },
            {
                label: 'Vue',
                leftIcon: <IconBrandVue size={16} />,
            },
            {
                label: 'PHP',
                leftIcon: <IconBrandPhp size={16} />,
            },
            {
                label: 'Javascript',
                leftIcon: <IconBrandJavascript size={16} />,
            },
            {
                label: 'Typescript',
                leftIcon: <IconBrandTypescript size={16} />,
            },
            {
                label: 'Python',
                leftIcon: <IconBrandPython size={16} />,
            },
            {
                label: 'Active Directory',
                leftIcon: <IconBrandWindows size={16} />,
            },
            {
                label: 'Java Android',
                leftIcon: <IconBrandAndroid size={16} />,
            },
            {
                label: 'Git',
                leftIcon: <IconBrandGit size={16} />,
            },
            {
                label: 'Github',
                leftIcon: <IconBrandGithub size={16} />,
            },
            {
                label: 'AI prompts',
                leftIcon: <IconMessageChatbot size={16} />,
            },
            {
                label: 'Google',
                leftIcon: <IconBrandGoogle size={16} />,
            },
            {
                label: 'Figma',
                leftIcon: <IconBrandFigma size={16} />,
            },
            {
                label: 'NextJS',
                leftIcon: <IconBrandNextjs size={16} />,
            },
            {
                label: 'Vite',
                leftIcon: <IconBrandVite size={16} />,
            },
            {
                label: 'Unity',
                leftIcon: <IconBrandUnity size={16} />,
            },
            {
                label: 'SQL',
                leftIcon: <IconDatabase size={16} />,
            },
        ];
        setSkillBadgesData(data);
    }, []);

    return skillBadgesData;
};
