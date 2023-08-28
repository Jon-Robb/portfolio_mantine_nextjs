import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useScreenWidth } from '../../hooks/useScreenSize';

interface PicCarouselProps {
    imagesUrl: string[];
}

export default function PicCarousel({ imagesUrl }: PicCarouselProps) {
    const screenWidth = useScreenWidth();
    const slides = imagesUrl.map((url, index) => (
        <Carousel.Slide key={index}>
            <Image src={url} alt="Random image from unsplash" />
        </Carousel.Slide>
    ));
    return (
        <div style={{
            height: '100%',
            display: 'flex',
        }}
        >
            <Carousel
              withControls={screenWidth > 768}
              draggable={screenWidth < 768}
              loop
              height="100%"
              sx={{ flex: 1 }}
              align="center"
            >
                {slides}
            </Carousel>
        </div>
    );
}
