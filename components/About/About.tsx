import { Text, rem } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import StickyTitle from '../StickyTitle/StickyTitle';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
import PicCarousel from '../PicCarousel/PicCarousel';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';

interface AboutProps {
    nodeRef?: React.RefObject<HTMLElement>;
}

const images: string[] = [
    'https://source.unsplash.com/random/300x300',
    'https://source.unsplash.com/random/300x400',
    'https://source.unsplash.com/random/300x500',
];

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
            <div style={{
                height: rem(400),
            }}
            >
                <PicCarousel imagesUrl={images} />
            </div>
        </section>
    );
}
