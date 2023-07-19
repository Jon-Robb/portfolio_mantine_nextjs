import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import useStyles from './Projects.styles';

export default function Projects() {
    const { classes } = useStyles();
    const { t } = useTranslation();
    return (
        <section className="section" id="projects">
            <Title order={2} mt={32} mb={32}> {t('projects')} </Title>
            <div className={classes.wrapper}>
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine']}
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine', 'React', 'Typescript', 'Mantine']}

                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine']}

                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine']}

                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine']}

                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                  techs={['React', 'Typescript', 'Mantine']}

                />

            </div>
        </section>
    );
}
