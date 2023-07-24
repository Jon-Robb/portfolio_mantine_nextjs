import { Anchor, Text } from '@mantine/core';
import useStyles from './CollaboratorsContainer.styles';
import { CollaboratorsContainerProps, Collaborator } from '../../typescript/interfaces/ICollaborators';

export default function CollaboratorsContainer({ collaborators }: CollaboratorsContainerProps) {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Text className={classes.text}>Collaborator{collaborators.length > 1 ? 's' : ''}:</Text>
            {collaborators.map((collaborator:Collaborator) => (
                <Anchor
                  key={collaborator.name}
                  href={collaborator.githubLink}
                >
                    {collaborator.name}
                </Anchor>
            ))}
        </div>
    );
}
