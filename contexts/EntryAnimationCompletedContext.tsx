import { createContext } from 'react';

interface EntryAnimationCompletedContextType {
  entryAnimationCompleted: boolean;
  setEntryAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EntryAnimationCompletedContext =
    createContext <EntryAnimationCompletedContextType | undefined>(undefined);
