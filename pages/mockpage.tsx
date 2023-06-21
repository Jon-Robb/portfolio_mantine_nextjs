import { Button, Anchor } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { CreateStylesDemo } from '../components/CreateStylesDemo/CreateStylesDemo';

export default function MockPage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <CreateStylesDemo />
      <Button variant="success">
        <Anchor href="/">Back to Home</Anchor>
      </Button>

    </>
  );
}
