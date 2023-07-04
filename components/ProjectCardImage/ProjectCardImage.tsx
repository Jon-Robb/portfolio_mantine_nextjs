import { Image } from '@mantine/core';

interface ProjectCardImageProps {
    src: string,
    alt: string,
}

export default function ProjectCardImage({ src, alt } : ProjectCardImageProps) {
    return (
        <Image src={src} alt={alt} radius={5} maw={300} />
    );
}
