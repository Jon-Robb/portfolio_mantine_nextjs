import { useEffect, useRef, useState } from 'react';
import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import { useScreenWidth } from '../../hooks/useScreenSize';
import ProjectCardGrid from '../ProjectCardGrid/ProjectCardGrid';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './Projects.styles';
import useIsInViewport from '../../hooks/useIsInViewport';

interface ProjectsProps {
  nodeRef?: React.RefObject<HTMLElement>;
}

export default function Projects({ nodeRef }: ProjectsProps) {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const screenWidth = useScreenWidth();
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleIncrement, setVisibleIncrement] = useState<number>(1);

  useEffect(() => {
    setVisibleCount(screenWidth > 1184 ? 4 : 2);
    setVisibleIncrement(screenWidth > 1184 ? 2 : 1);
  }, [screenWidth]);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + visibleIncrement);
  };

  const handleLoadLess = () => {
    setVisibleCount(visibleCount - visibleIncrement);
  };

  return (
    // put ref={ref} on the section tag to use useIsInViewport
    <section ref={nodeRef} className="section" id="projects">
      <StickyTitle title={t('projects.title')} />
      <ProjectCardGrid visibleCount={visibleCount} />
      <Button.Group className={classes.buttonGroup}>
        <Button onClick={handleLoadLess} variant="gradient" disabled={visibleCount <= visibleIncrement} className={classes.button}>
          {t('common.showless')}
        </Button>
        <Button onClick={handleLoadMore} variant="gradient" disabled={visibleCount >= ProjectsData.length} className={classes.button}>
          {t('common.showmore')}
        </Button>
      </Button.Group>
    </section>
  );
}
