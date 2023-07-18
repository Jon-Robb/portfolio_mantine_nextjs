import { Badge } from '@mantine/core';
import { useScreenSize } from '../../hooks/useScreenSize';
import useStyles from './TechBadgesContainer.styles';

interface TechBadgesContainerProps {
    techs: string[];
}
function TechBadgesContainer({ techs }: TechBadgesContainerProps) {
    const screenSize = useScreenSize();
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            {techs.map((tech, index) => (
                <Badge key={index} size={screenSize} radius={screenSize}>
                    {tech}
                </Badge>
            ))}
        </div>
    );
}
export default TechBadgesContainer;
