import { useEffect, useState } from 'react';
import { Anchor, Text } from '@mantine/core';
import i18n from '../../i18n/config';
import useStyles from './CollaboratorsContainer.styles';
import { CollaboratorsContainerProps, Collaborator } from '../../typescript/interfaces/ICollaborators';

type Translation = {
    singular: string;
    plural: string;
};

type CollaboratorTranslations = {
    [lang: string]: Translation;
};

const collabTranslations:CollaboratorTranslations = {
    en: {
        singular: 'Collaborator',
        plural: 'Collaborators',
    },
    es: {
        singular: 'Colaborador',
        plural: 'Colaboradores',
    },
    fr: {
        singular: 'Collaborateur',
        plural: 'Collaborateurs',
    },
};

export default function CollaboratorsContainer({ collaborators }: CollaboratorsContainerProps) {
    const { classes } = useStyles();
    const [collabString, setCollabString] = useState<string>('');

    useEffect(() => {
        const lang = i18n.language;
        if (collabTranslations[lang]) {
            setCollabString(
                collaborators.length > 1 ?
                collabTranslations[lang].plural :
                collabTranslations[lang].singular
            );
        }
    }, [i18n.language]);

    return (
        <div className={classes.wrapper}>
            <Text> {collabString} :</Text>
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
