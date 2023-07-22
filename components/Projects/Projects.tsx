import { useEffect, useState } from 'react';
import { Button, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useScreenWidth } from '../../hooks/useScreenSize';
import ProjectCardGrid from '../ProjectCardGrid/ProjectCardGrid';
import { ProjectsData } from '../../data/ProjectsData';

export default function Projects() {
  const { t } = useTranslation();
  const screenWidth = useScreenWidth();
  const [visibleCount, setVisibleCount] = useState<number>(0);

  useEffect(() => {
    setVisibleCount(screenWidth > 1440 ? 2 : 1);
  }, [screenWidth]);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 1);
  };

  const handleLoadLess = () => {
    setVisibleCount(visibleCount - 1);
  };

  return (
    <section className="section" id="projects">
      <Title order={2} mt={32} mb={32}> {t('projects')} </Title>
      <ProjectCardGrid visibleCount={visibleCount} />
      {visibleCount < ProjectsData.length && (
        <Button onClick={handleLoadMore} variant="gradient" fullWidth>
          {t('showmore')}
        </Button>
      )}
      {visibleCount > 1 && (
        <Button onClick={handleLoadLess} variant="gradient" fullWidth>
          {t('showless')}
        </Button>
      )}
    </section>
  );
}
