import { Text,
    // Transition
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
// import { useEffect, useState } from 'react';
import StickyTitle from '../StickyTitle/StickyTitle';
import SkillBadgeContainer from '../SkillBadgesContainer/SkillBadgesContainer';
// import PicCarousel from '../PicCarousel/PicCarousel';
import { useSkillBadgesData } from '../../hooks/useSkillBadgesData';
// import { useScreenWidth } from '../../hooks/useScreenSize';
// import useStyles from './About.styles';

interface AboutProps {
    nodeRef?: React.RefObject<HTMLElement>;
}

// const images: string[] = [
//     'https://source.unsplash.com/random/300x300',
//     'https://source.unsplash.com/random/300x300',
//     'https://source.unsplash.com/random/300x300',
// ];

export default function About({ nodeRef }: AboutProps) {
    const { t } = useTranslation();
    const skillBadges = useSkillBadgesData();
    // const screenWidth = useScreenWidth();

    // const [carouselWidth, setCarouselWidth] = useState(0);
    // const [showCarousel, setShowCarousel] = useState(false);
    // const { classes } = useStyles();

    // useEffect(() => {
    //     const breakpoints = [
    //         { width: 1184, multiplier: 0.3 },
    //         { width: 1024, multiplier: 0.4 },
    //         { width: 768, multiplier: 0.5 },
    //     ];

    //     let heightMultiplier = 0.6; // default value

    //     for (let i = 0; i < breakpoints.length; i += 1) {
    //         if (screenWidth > breakpoints[i].width) {
    //             heightMultiplier = breakpoints[i].multiplier;
    //             break;
    //         }
    //     }

    //     const height = screenWidth * heightMultiplier;
    //     setCarouselWidth(height);
    // }, [screenWidth]);

    return (
        <section ref={nodeRef} className="section" id="about">
            <StickyTitle title={t('about.title')} />
            <div>
                <Text>
                    {t('about.para1')}
                </Text>
                <Text>
                    {t('about.para2')}
                </Text>
                <Text>
                    {t('about.para3')}
                </Text>

            </div>
            <div id="skills">
                <SkillBadgeContainer skillBadges={skillBadges} />
            </div>
            {/* <div className={classes.carouselContainer}>
                <div className={classes.textWrapper}>
                    <Text
                      variant="gradient"
                      ta={screenWidth < 768 ? 'center' : 'left'}
                      onClick={() => setShowCarousel(!showCarousel)}
                      className={classes.text}
                    >
                        {showCarousel ? t('about.hidePics') : t('about.showPics')}
                    </Text>
                </div>
                <Transition
                  mounted={showCarousel}
                  transition="pop"
                  duration={1000}
                  timingFunction="ease"
                >
                        {(transitionStyles) => (
                            <div style={{
                                ...transitionStyles,
                                width: carouselWidth,
                                marginTop: '2rem',
                            }}
                            >
                                <PicCarousel imagesUrl={images} />
                            </div>
                        )}
                </Transition>
            </div> */}
        </section>
    );
}
