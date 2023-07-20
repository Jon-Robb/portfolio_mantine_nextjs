import { Text, Button, Title, Paper } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';
import ProjectCardImage from '../ProjectCardImage/ProjectCardImage';
import TechBadgesContainer from '../TechBadgesContainer/TechBadgesContainer';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ProjectCard.styles';

export default function ProjectCard({
    title,
    description,
    imageUrl,
    projectUrl,
    videoSrc,
    codeUrl,
    nodeRef,
    techs }: ProjectCardProps) {
    const { classes } = useStyles();
    const screenSize = useScreenSize();
    const { t } = useTranslation();

    return (
        <Paper
          p={screenSize}
          radius={screenSize}
          shadow={screenSize}
          className={classes.wrapper}
          ref={nodeRef}
        >
            <div className={classes.grid}>
                <div className={classes.imageWrapper}>
                    <ProjectCardImage src={imageUrl} videoSrc={videoSrc} />
                </div>
                <div className={classes.content}>
                    <Title order={4} className={classes.title}> {title} </Title>
                    <Text className={classes.description}> {description} </Text>
                    {projectUrl ? (
                        <Button.Group className={classes.buttonGroup}>
                            <Button className={classes.button} variant="gradient" component="a" href={projectUrl} rel="noopener noreferer">
                                {t('viewdemo')}
                            </Button>
                            <Button className={classes.button} variant="gradient" component="a" href={codeUrl} rel="noopener noreferer">
                                {t('viewcode')}
                            </Button>
                        </Button.Group>
                    ) : (
                        <Button variant="gradient" component="a" href={codeUrl} fullWidth rel="noopener noreferer">
                            {t('viewcode')}
                        </Button>
                    )}
                </div>
            </div>
            <TechBadgesContainer techs={techs} />
        </Paper>
    );
}
