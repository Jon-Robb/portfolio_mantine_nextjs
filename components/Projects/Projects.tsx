import { Title } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
    return (
        <section className="section" id="projects">
            <Title order={2} mt={32} mb={32}> Projects </Title>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gridGap: '1rem',
                padding: '1rem',
                margin: '1rem',
            }}
            >
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
