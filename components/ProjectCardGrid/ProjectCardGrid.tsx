import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState(ProjectsData);
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(ProjectsData.slice(0, visibleCount));
  }, [visibleCount]);

  return (
    <TransitionGroup className={classes.wrapper}>
      {projects.map((project) => (
        <CSSTransition
          key={project.id}
          timeout={500}
          classNames="item"
        >
          <ProjectCard
            key={project.id}
            title={t(project.title)}
            description={t(project.description)}
            imageUrl={project.imageUrl}
            videoSrc={project.videoSrc}
            projectUrl={project.projectUrl}
            codeUrl={project.codeUrl}
            techs={project.techs}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
