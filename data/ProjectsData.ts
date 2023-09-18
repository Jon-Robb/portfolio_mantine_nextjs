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
            { name: 'Andrzej Wisniowski', githubLink: 'https://github.com/cryptoblivious/' },
        ],
    },

    {
        title: 'Boids',
        description: 'projects.boids.desc',
        imageUrl: '../../images/boids_mainpic.png',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/Boids',
        techs: ['Python', 'Tkinter'],
        collaborators: [
            { name: 'Andrzej Wisniowski', githubLink: 'https://github.com/cryptoblivious/' },
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
        title: 'projects.textanalyzer.title',
        description: 'projects.textanalyzer.desc',
        imageUrl: '../../images/textanalyzer_mainmenu.png',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/text_analyzer_synonyms_finder',
        techs: ['Python', 'Numpy', 'CLI'],
        collaborators: [
            { name: 'Andrzej Wisniowski', githubLink: 'https://github.com/cryptoblivious/' },
        ],
    },
    {
        title: 'projects.fsm.title',
        description: 'projects.fsm.desc',
        imageUrl: '../../images/fsm_mainpic.png',
        codeUrl: 'https://github.com/Jon-Robb/finite_state_machine_library',
        techs: ['Python'],
        collaborators: [
            { name: 'Andrzej Wisniowski', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Nathaelle Fournier', githubLink: 'https://github.com/SakyunBuns' },
            { name: 'Quoc Huann Tran', githubLink: 'https://github.com/ArsenTigor' },
        ],
    },
    {
        title: 'projects.ga.title',
        description: 'projects.ga.desc',
        imageUrl: '../../images/ga_mainpic.png',
        // videoSrc: '../../videos/test.mp4',
        codeUrl: 'https://github.com/Jon-Robb/genetic_algorithm',
        techs: ['Python', 'Pyside6', 'Numpy', 'Pillow'],
        collaborators: [
            { name: 'Andrzej Wisniowski', githubLink: 'https://github.com/cryptoblivious/' },
            { name: 'Alexis Provost', githubLink: 'https://github.com/alexisprovost/' },
            { name: 'Thomas Pelletier', githubLink: 'https://github.com/Thomkiller/' },
        ],
    },
    {
        title: 'Paint',
        description: 'projects.paint.desc',
        imageUrl: '../../images/paint_mainpic.png',
        codeUrl: 'https://github.com/Jon-Robb/simple_paint_android',
        techs: ['Java', 'Android'],
    },
    {
        title: 'projects.playerspotify.title',
        description: 'projects.playerspotify.desc',
        imageUrl: '../../images/playerspotify_mainpic.png',
        codeUrl: 'https://github.com/Jon-Robb/spotify_app_radiohead',
        techs: ['Java', 'Android', 'Spotify API'],
    },
    {
        title: 'projects.quizspotify.title',
        description: 'projects.quizspotify.desc',
        imageUrl: '../../images/quizspotify_mainpic.png',
        codeUrl: 'https://github.com/Jon-Robb/spotify_api_quiz_tributetorickgoodness',
        techs: ['Java', 'Android', 'Spotify API'],
    },
    // {
    //     title:'projects.portfolio.title',
    //     description:'projects.portfolio.desc',

    // }
];
