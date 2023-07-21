import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(ProjectsData.slice(0, visibleCount));
  }, [visibleCount]);

  return (
    <TransitionGroup className={classes.wrapper} enter appear>
      {projects.map((project) => (
        <CSSTransition
          key={project.id}
          nodeRef={project.nodeRef}
          timeout={500}
          in
          appear
          classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            exit: classes.exit,
            exitActive: classes.exitActive,
          }}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          <ProjectCard
            {...project}
            title={t(project.title)}
            description={t(project.description)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
