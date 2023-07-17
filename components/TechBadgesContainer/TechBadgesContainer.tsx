import { Badge } from '@mantine/core';

interface TechBadgesContainerProps {
    techs: string[];
}
function TechBadgesContainer({ techs }: TechBadgesContainerProps) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
        }}
        >
            {techs.map((tech, index) => (
                <Badge key={index}>
                    {tech}
                </Badge>
            ))}
        </div>
    );
}
export default TechBadgesContainer;
