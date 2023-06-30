import { Title, Text } from '@mantine/core';
import useStyles from './About.styles';

export default function About() {
    const { classes } = useStyles();
    return (
        <section className="section">
            <Title order={2}>About</Title>
            <Text>
                I am a software engineer with a passion for learning and a love for problem solving.
            </Text>
            <Text>
                I love internet culture and the way it has shaped the world. I am a huge fan of
                open-source software and the communities that surround them.
            </Text>
            <Text>
                I am a huge fan of the outdoors and love to go hiking, camping, and fishing. I
                enjoy playing video games and watching movies.
            </Text>
        </section>
    );
}
