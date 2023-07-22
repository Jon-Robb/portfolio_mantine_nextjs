import { useEffect, useState } from 'react';
import { Button, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useScreenWidth } from '../../hooks/useScreenSize';
import ProjectCardGrid from '../ProjectCardGrid/ProjectCardGrid';
import { ProjectsData } from '../../data/ProjectsData';
import useStyles from './Projects.styles';

export default function Projects() {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const screenWidth = useScreenWidth();
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleIncrement, setVisibleIncrement] = useState<number>(1);

  useEffect(() => {
    setVisibleCount(screenWidth > 1440 ? 2 : 1);
    setVisibleIncrement(screenWidth > 1440 ? 2 : 1);
  }, [screenWidth]);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + visibleIncrement);
  };

  const handleLoadLess = () => {
    setVisibleCount(visibleCount - visibleIncrement);
  };

  return (
    <section className="section" id="projects">
      <Title order={2} mt={32} mb={32}> {t('projects')} </Title>
      <ProjectCardGrid visibleCount={visibleCount} />
      <Button.Group className={classes.buttonGroup}>
        <Button onClick={handleLoadLess} variant="gradient" disabled={visibleCount <= visibleIncrement} className={classes.button}>
          {t('showless')}
        </Button>
        <Button onClick={handleLoadMore} variant="gradient" disabled={visibleCount >= ProjectsData.length} className={classes.button}>
          {t('showmore')}
        </Button>
      </Button.Group>
    </section>
  );
}
