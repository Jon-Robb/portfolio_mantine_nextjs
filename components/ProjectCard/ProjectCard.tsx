import { Text, Button, Image, Title } from '@mantine/core';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    codeUrl: string;
}

export default function ProjectCard({
    title,
    description,
    imageUrl,
    projectUrl,
    codeUrl }: ProjectCardProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '1rem',

        }}
        >
            <Title order={3}> {title} </Title>
            <Text> {description} </Text>
            <Image src={imageUrl} alt={title} radius={5} maw={300} />
            <Button.Group style={{ gap: '1rem' }}>
                <Button component="a" href={projectUrl}>
                    View Project
                </Button>
                <Button component="a" href={codeUrl}>
                    View Code
                </Button>
            </Button.Group>

        </div>
    );
}
