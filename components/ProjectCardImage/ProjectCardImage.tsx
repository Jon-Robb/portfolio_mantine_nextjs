import { useEffect, useState, useRef } from 'react';
import { Image } from '@mantine/core';
import { useScreenWidth } from '../../hooks/useScreenSize';
import useStyles from './ProjectCardImage.styles';

interface ProjectCardImageProps {
    src: string,
    alt: string,
    videoSrc?: string,
}

export default function ProjectCardImage({ src, alt, videoSrc }: ProjectCardImageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { classes } = useStyles();
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const screenWidth = useScreenWidth();

    useEffect(() => {
        if (!videoRef.current) return;
        if (isHovered) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            // videoRef.current.currentTime = 0; // Reset video to beginning
        }
    }, [isHovered]);

    useEffect(() => {
        const handleResize = () => {
            if (!wrapperRef.current) return;
            const newWidth = screenWidth * 0.5;
            const newHeight = screenWidth * 0.5;
            wrapperRef.current.style.width = `${newWidth}px`;
            wrapperRef.current.style.height = `${newHeight}px`;
        };
        handleResize();
    }, [screenWidth]);

    return (
        <div
          ref={wrapperRef}
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
                <Image
                  className={`${classes.media} ${isHovered ? classes.hide : classes.show}`}
                  src={src}
                  alt={alt}
                />
            {/* )} */}
        </div>
    );
}
