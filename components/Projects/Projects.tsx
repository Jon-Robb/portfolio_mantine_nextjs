import { Title } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';
import useStyles from './Projects.styles';

export default function Projects() {
    const { classes } = useStyles();
    return (
        <section className="section" id="projects">
            <Title order={2} mt={32} mb={32}> Projects </Title>
            <div className={classes.wrapper}>
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />
                <ProjectCard
                  title="The Last Stand"
                  description="Proof of concept for a multiplayer smashlike game"
                  imageUrl="../../images/profilepic.jpg"
                  videoSrc="../../videos/test.mp4"
                  //   projectUrl="https://www.google.com"
                  codeUrl="https://www.google.com"
                />

            </div>
        </section>
    );
}
