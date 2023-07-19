import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';

export default function ProjectCardGrid() {
    const { classes } = useStyles();
    const projects = ProjectsData;
    return (
        <div className={classes.wrapper}>
            {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
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
