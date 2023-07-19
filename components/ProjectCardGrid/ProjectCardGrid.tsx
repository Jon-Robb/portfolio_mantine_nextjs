import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
    const { classes } = useStyles();
    const { t } = useTranslation();
    const projects = ProjectsData;
    return (
        <div className={classes.wrapper}>
            {projects.slice(0, visibleCount).map((project, index) => (
                <ProjectCard
                  key={index}
                  title={t(project.title)}
                  description={t(project.description)}
                  imageUrl={project.imageUrl}
                  videoSrc={project.videoSrc}
                  projectUrl={project.projectUrl}
                  codeUrl={project.codeUrl}
                  techs={project.techs}
                />
            ))}
        </div>
    );
}
