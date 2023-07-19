import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState(() => ProjectsData.slice(0, visibleCount));
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(ProjectsData.slice(0, visibleCount));
    console.log('ProjectCardGrid.tsx: useEffect: setProjects: ProjectsData.slice(0, visibleCount): ', ProjectsData.slice(0, visibleCount));
  }, [visibleCount]);

  return (
    <TransitionGroup className={classes.wrapper}>
      {projects.map((project, index) => (
        <CSSTransition
          key={Math.random()}
          timeout={500}
          classNames="item"
        >
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
