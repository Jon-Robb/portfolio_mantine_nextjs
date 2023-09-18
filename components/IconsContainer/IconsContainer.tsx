import { ActionIcon, Tooltip } from '@mantine/core';
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import useStyles from './IconsContainer.styles';

export default function IconsContainer() {
  const { classes } = useStyles();

  return (
    <div className={classes.iconsContainer}>
      <Tooltip label="Github" position="top" withArrow>
        <ActionIcon variant="outline" component="a" href="https://github.com/jon-robb" target="_blank"> <GitHubLogoIcon /> </ActionIcon>
      </Tooltip>
      <Tooltip label="LinkedIn" position="top" withArrow>
        <ActionIcon variant="outline" component="a" href="https://www.linkedin.com/in/jonathan-robinson-187716274/" target="_blank"> <LinkedInLogoIcon /> </ActionIcon>
      </Tooltip>
      <Tooltip label="Email" position="top" withArrow>
        <ActionIcon variant="outline" component="a" href="mailto:robinsonjonathan240817@gmail.com"> <EnvelopeClosedIcon /> </ActionIcon>
      </Tooltip>
    </div>
  );
}
