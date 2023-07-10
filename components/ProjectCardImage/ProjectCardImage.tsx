import { useEffect, useState } from 'react';
import { Image } from '@mantine/core';

interface ProjectCardImageProps {
    src: string,
    alt: string,
    videoSrc?: string,
}

export default function ProjectCardImage({ src, alt, videoSrc }: ProjectCardImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log('isHovered: ', isHovered);
    }, [isHovered]);

    return (
        <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 5 }}
                />
            ) : (
                <Image
                  src={src}
                  alt={alt}
                  radius={5}
                  maw={300}
                />
            )}
        </div>
    );
}
