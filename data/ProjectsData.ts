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
        techs: ['React', 'Typescript', 'Phaser3', 'Colyseus', 'WebSockets', 'TailwindCSS', 'Node', ' ExpressJS'],
        collaborators: [
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
        ],
    },

    {
        title: 'Boids',
        description: 'projects.boids.desc',
        imageUrl: '../../images/textanalyzer_mainmenu.png',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/Boids',
        techs: ['Python', 'Tkinter'],
        collaborators: [
            { name: 'Cryptoblivious', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Alexis Provost', githubLink: 'https://github.com/alexisprovost/' },
            { name: 'Thomas Pelletier', githubLink: 'https://github.com/Thomkiller/' },

        ],
    },
    {
        title: 'Magix',
        description: 'projects.magix.desc',
        imageUrl: '../../images/magixmainpic.jpeg',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/Magix',
        techs: ['PHP', 'JavaScript', 'CSS', 'HTML', 'PostgreSQL', 'Ajax'],
    },
    {
        title: 'Text Analyzer - Synonyms finder',
        description: 'projects.textanalyzer.desc',
        imageUrl: '../../images/textanalyzer_mainmenu.png',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/text_analyzer_synonyms_finder',
        techs: ['Python', 'Numpy', 'CLI'],
    },
];
