import { useEffect, useState, useRef } from 'react';
import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import { useScreenWidth } from '../../hooks/useScreenSize';
import ProjectCardGrid from '../ProjectCardGrid/ProjectCardGrid';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './Projects.styles';
import useIsInViewport from '../../hooks/useVisibility';

export default function Projects() {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const screenWidth = useScreenWidth();
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleIncrement, setVisibleIncrement] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref); // [0.5] is the threshold, [0] is the default value

  useEffect(() => {
    console.log('isInViewport', isInViewport);
  }, [isInViewport]);

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
    <section ref={ref} className="section" id="projects">
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
