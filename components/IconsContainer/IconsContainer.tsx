import { ActionIcon } from '@mantine/core';
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import useStyles from './IconsContainer.styles';

export default function IconsContainer() {
    const { classes } = useStyles();
    return (
        <div className={classes.iconsContainer}>
            <ActionIcon variant="outline" component="a" href="https://github.com/jon-robb"> <GitHubLogoIcon /> </ActionIcon>
            <ActionIcon variant="outline" component="a" href="https://www.linkedin.com/in/jonathan-robinson-187716274/"> <LinkedInLogoIcon /> </ActionIcon>
            <ActionIcon variant="outline" component="a" href="mailto:robinsonjonathan240817@gmail.com"> <EnvelopeClosedIcon /> </ActionIcon>
        </div>
    );
}
