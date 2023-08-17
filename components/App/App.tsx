import AppShellContainer from '../AppShell/AppShellContainer';
import { EntryAnimationCompletedProvider } from '../../providers/EntryAnimationCompletedProvider';

export default function App() {
  return (
    <EntryAnimationCompletedProvider>
      <AppShellContainer />
    </EntryAnimationCompletedProvider>
  );
}
