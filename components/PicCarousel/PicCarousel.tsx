import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useScreenWidth, useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './PicCarousel.styles';

interface PicCarouselProps {
    imagesUrl: string[];
}

export default function PicCarousel({ imagesUrl }: PicCarouselProps) {
    const screenWidth = useScreenWidth();
    const screenSize = useScreenSize();
    const slides = imagesUrl.map((url, index) => (
        <Carousel.Slide key={index}>
            <Image src={url} alt="Random image from unsplash" />
        </Carousel.Slide>
    ));
    const { classes } = useStyles();

    return (
        <div style={{
            height: '100%',
            display: 'flex',
        }}
        >
            <Carousel
              withControls={screenWidth > 768}
              draggable={screenWidth < 768}
              dragFree={screenWidth < 768}
              loop
              height="100%"
              sx={{ flex: 1 }}
              align="center"
              slideGap={screenSize}
              classNames={{
                slide: classes.slide,
                container: classes.container,
              }}
              slidesToScroll="auto"
            //   slideSize="100%"
            >
                {slides}
            </Carousel>
        </div>
    );
}
