export interface Collaborator {
    name: string;
    githubLink: string;
}

export interface CollaboratorsContainerProps {
    collaborators: Collaborator[];
}
