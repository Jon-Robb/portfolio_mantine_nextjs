import { Title, Text, Anchor } from '@mantine/core';
// import useStyles from './Welcome.styles';

export function Welcome() {
  // const { classes } = useStyles();

  return (
    <>
      <Title>
        Welcome to{' '}
        <Text variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <Text align="center" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
