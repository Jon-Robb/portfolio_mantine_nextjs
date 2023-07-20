import { RefObject } from 'react';

export interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    codeUrl: string;
    techs: string[];
    videoSrc?: string;
    projectUrl?: string;
    id?: string;
    nodeRef?: RefObject<HTMLDivElement>;
}
