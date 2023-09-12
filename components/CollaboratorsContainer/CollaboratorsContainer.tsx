import { Anchor, Text } from '@mantine/core';
import useStyles from './CollaboratorsContainer.styles';
import { CollaboratorsContainerProps, Collaborator } from '../../typescript/interfaces/ICollaborators';

export default function CollaboratorsContainer({ collaborators }: CollaboratorsContainerProps) {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Text> Collaborator{collaborators.length > 1 ? 's' : ''}:</Text>
            <div className={classes.collaboratorsContainer}>
            {collaborators.map((collaborator:Collaborator, index:number) => (
                <Anchor
                  key={index}
                  target="_blank"
                  href={collaborator.githubLink}
                >
                    {collaborator.name} {index < collaborators.length - 1 ? '-' : ''}
                </Anchor>
            ))}
            </div>
        </div>
    );
}
