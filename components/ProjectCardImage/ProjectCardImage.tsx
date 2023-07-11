import { useEffect, useState } from 'react';
import { Image } from '@mantine/core';
import useStyles from './ProjectCardImage.styles';

interface ProjectCardImageProps {
    src: string,
    alt: string,
    videoSrc?: string,
}

export default function ProjectCardImage({ src, alt, videoSrc }: ProjectCardImageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { classes } = useStyles();

    useEffect(() => {
        console.log('isHovered: ', isHovered);
    }, [isHovered]);

    return (
        <div
          className={classes.wrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && videoSrc ? (
                <video
                  className={`${classes.media} ${!isHovered ? classes.show : classes.hide}`}
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                />
            ) : (
                <Image
                  className={`${classes.media} ${!isHovered ? classes.hide : classes.show}`}
                  src={src}
                  alt={alt}
                />
            )}
        </div>
    );
}
