import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';

interface AboutProps {
    nodeRef?: React.RefObject<HTMLElement>;
}

export default function About({ nodeRef }: AboutProps) {
    const { t } = useTranslation();
    const skillBadges = useSkillBadgesData();

    return (
        <section ref={nodeRef} className="section" id="about" style={{ marginTop: 0 }}>
            <StickyTitle title={t('about.title')} />
            <Text>
                {t('about.para1')}
            </Text>
            <Text>
                {t('about.para2')}
            </Text>
            <Text>
                {t('about.para3')}
            </Text>
            <div id="skills">
                <SkillBadgeContainer skillBadges={skillBadges} />
            </div>
        </section>
    );
}
