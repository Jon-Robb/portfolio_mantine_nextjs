import { Text, Button, Title, Paper } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';
import ProjectCardImage from '../ProjectCardImage/ProjectCardImage';
import TechBadgesContainer from '../TechBadgesContainer/TechBadgesContainer';
import CollaboratorsContainer from '../CollaboratorsContainer/CollaboratorsContainer';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './ProjectCard.styles';

export default function ProjectCard({
    title,
    description,
    imageUrl,
    projectUrl,
    videoSrc,
    codeUrl,
    techs,
    collaborators }: ProjectCardProps) {
    const { classes } = useStyles();
    const screenSize = useScreenSize();
    const { t } = useTranslation();

    return (
        <Paper
          p={screenSize}
          radius={screenSize}
          shadow={screenSize}
          className={classes.wrapper}
        >
            <div className={classes.grid}>
                <div className={classes.imageWrapper}>
                    <ProjectCardImage src={imageUrl} videoSrc={videoSrc} />
                </div>
                <div className={classes.content}>
                    <Title variant="gradient" order={4} className={classes.title}> {title} </Title>
                    <Text className={classes.description}> {description} </Text>
                    {projectUrl ? (
                        <Button.Group className={classes.buttonGroup}>
                            <Button className={classes.button} variant="gradient" component="a" href={projectUrl} rel="noopener noreferer" target="_blank">
                                {t('common.viewdemo')}
                            </Button>
                            <Button className={classes.button} variant="gradient" component="a" href={codeUrl} rel="noopener noreferer" target="_blank">
                                {t('common.viewcode')}
                            </Button>
                        </Button.Group>
                    ) : (
                        <Button variant="gradient" component="a" href={codeUrl} fullWidth rel="noopener noreferer" target="_blank">
                            {t('common.viewcode')}
                        </Button>
                    )}
                </div>
            </div>
            <TechBadgesContainer techs={techs} />
            {collaborators && <CollaboratorsContainer collaborators={collaborators} />}
        </Paper>
    );
}
