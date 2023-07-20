import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState<ProjectCardProps[]>(
    ProjectsData.slice(0, visibleCount)
  );
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(ProjectsData.slice(0, visibleCount));
    console.log(projects, visibleCount);
  }, [visibleCount]);

  return (
    <TransitionGroup className={classes.wrapper} enter>
      {projects.map((project, index) => (
        <CSSTransition
          key={index}
          nodeRef={project.nodeRef}
          timeout={1000}
          classNames="projectcard"
          in
          onEnter={() => console.log('enter')}
        >
          <ProjectCard
            title={t(project.title)}
            description={t(project.description)}
            imageUrl={project.imageUrl}
            videoSrc={project.videoSrc}
            projectUrl={project.projectUrl}
            codeUrl={project.codeUrl}
            techs={project.techs}
            nodeRef={project.nodeRef}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
