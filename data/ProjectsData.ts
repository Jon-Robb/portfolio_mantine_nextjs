import { createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProjectCardProps } from '../typescript/interfaces/IProjectCard';

export const ProjectsData: ProjectCardProps[] = [
    {
        title: 'tls.title',
        description: 'tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        // projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
        id: uuidv4(),
        nodeRef: createRef(),
    },

    {
        title: 'tls.title',
        description: 'tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
        id: uuidv4(),
        nodeRef: createRef(),

    },
    {
        title: 'tls.title',
        description: 'tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
        id: uuidv4(),
        nodeRef: createRef(),

    },
    {
        title: 'tls.title',
        description: 'tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
        id: uuidv4(),
        nodeRef: createRef(),

    },
];
