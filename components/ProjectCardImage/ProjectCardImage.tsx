import { useEffect, useState, useRef } from 'react';
// import { Image } from '@mantine/core';
import useStyles from './ProjectCardImage.styles';

interface ProjectCardImageProps {
    src: string,
    videoSrc?: string,
}

export default function ProjectCardImage({ src, videoSrc }: ProjectCardImageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { classes } = useStyles();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isHovered) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            // videoRef.current.currentTime = 0; // Reset video to beginning
        }
    }, [isHovered]);

    return (
        <div
          className={classes.wrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {/* {isHovered && videoSrc ? ( */}
                <video
                  ref={videoRef}
                  className={`${classes.media} ${isHovered ? classes.show : classes.hide}`}
                  src={videoSrc}
                  loop
                  muted
                />
            {/* ) : ( */}
            <div
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
              className={`${classes.media} ${isHovered ? classes.hide : classes.show}`}
            />                {/* <Image
                  className={`${classes.media} ${isHovered ? classes.hide : classes.show}`}
                  src={src}
                  alt={alt}
                /> */}
            {/* )} */}
        </div>
    );
}
