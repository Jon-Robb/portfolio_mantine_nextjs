import { useEffect, useState, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';

export interface ExtendedProjectCardProps extends ProjectCardProps {
  nodeRef: React.RefObject<HTMLDivElement>;
  id: string | number;
}

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState<ExtendedProjectCardProps[]>(
    ProjectsData.slice(0, visibleCount).map((project, index) =>
    ({ ...project, nodeRef: createRef(), id: index }))
  );
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(
      ProjectsData.slice(0, visibleCount).map((project, index) =>
      ({ ...project, nodeRef: createRef(), id: index }))
    );
  }, [visibleCount]);

  return (

    <TransitionGroup className={classes.wrapper} enter appear>
      {projects.map((project) => (
        <CSSTransition
          key={project.title}
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
        >
          <div ref={project.nodeRef} key={project.id}>
            <ProjectCard
              {...project}
              key={project.id}
              title={t(project.title)}
              description={t(project.description)}
            />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
