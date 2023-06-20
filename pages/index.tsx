import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { CreateStylesDemo } from '../components/CreateStylesDemo/CreateStylesDemo';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <CreateStylesDemo />
    </>
  );
}
