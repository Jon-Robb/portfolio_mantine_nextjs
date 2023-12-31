import { Collaborator } from './ICollaborators';

export interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    codeUrl: string;
    techs: string[];
    videoSrc?: string;
    projectUrl?: string;
    collaborators?: Collaborator[];
}
