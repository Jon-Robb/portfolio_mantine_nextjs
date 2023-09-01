import { ProjectCardProps } from '../typescript/interfaces/IProjectCard';

// Put the key of the translation (i18n translation .json files) in the title and description
export const ProjectsData: ProjectCardProps[] = [
    {
        title: 'projects.tls.title',
        description: 'projects.tls.desc',
        imageUrl: '../../images/tls_mainpic.png',
        // videoSrc: '',
        projectUrl: 'https://tls.andrzejw.com/login',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Phaser3', 'Colyseus', 'WebSockets', 'TailwindCSS', 'Node'],
        collaborators: [
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
        ],
    },

    {
        title: '2',
        description: 'projects.tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
        collaborators: [
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },

        ],
    },
    {
        title: '3',
        description: 'projects.tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
    },
    {
        title: '4',
        description: 'projects.tls.desc',
        imageUrl: '../../images/profilepic.jpg',
        videoSrc: '../../videos/test.mp4',
        projectUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
        techs: ['React', 'Typescript', 'Mantine'],
    },
];
