import { useEffect, useState, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './ProjectCardGrid.styles';
import { ProjectCardProps } from '../../typescript/interfaces/IProjectCard';

interface ExtendedProjectCardProps extends ProjectCardProps {
  nodeRef: React.RefObject<HTMLDivElement>;
  id: string;
}

export default function ProjectCardGrid({ visibleCount }: { visibleCount: number }) {
  const [projects, setProjects] = useState<ExtendedProjectCardProps[]>(
    ProjectsData.map((project) => ({ ...project, nodeRef: createRef(), id: uuid() }))
  );
  const { classes } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(ProjectsData.slice(0, visibleCount) as ExtendedProjectCardProps[]);
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
        >
          <div ref={project.nodeRef}>

            <ProjectCard
              {...project}
              title={t(project.title)}
              description={t(project.description)}
            />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
