import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import ProjectCardGrid from '../ProjectCardGrid/ProjectCardGrid';

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section className="section" id="projects">
            <Title order={2} mt={32} mb={32}> {t('projects')} </Title>
            <ProjectCardGrid />
        </section>
    );
}
