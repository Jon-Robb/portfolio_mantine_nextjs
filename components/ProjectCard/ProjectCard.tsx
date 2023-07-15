import { Text, Button, Title, Paper } from '@mantine/core';
import ProjectCardImage from '../ProjectCardImage/ProjectCardImage';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ProjectCard.styles';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    videoSrc?: string;
    projectUrl?: string;
    codeUrl: string;
}

export default function ProjectCard({
    title,
    description,
    imageUrl,
    projectUrl,
    videoSrc,
    codeUrl }: ProjectCardProps) {
    const { classes } = useStyles();
    const screenSize = useScreenSize();
    return (
        <Paper p={screenSize} radius={screenSize} shadow={screenSize} className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <ProjectCardImage src={imageUrl} videoSrc={videoSrc} />
            </div>
            <div className={classes.content}>
                <Title order={4} className={classes.title}> {title} </Title>
                <Text className={classes.description}> {description} </Text>
                {projectUrl ? (
                    <Button.Group className={classes.buttonGroup}>
                        <Button variant="gradient" component="a" href={projectUrl}>
                            View Project
                        </Button>
                        <Button variant="gradient" component="a" href={codeUrl}>
                            View Code
                        </Button>
                    </Button.Group>
                ) : (
                    <Button
                      variant="gradient"
                      component="a"
                      href={codeUrl}
                      fullWidth
                    >
                        View Code
                    </Button>
                )}
            </div>
        </Paper>
    );
}
