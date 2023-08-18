// contexts/AnimationContext.tsx

import { createContext } from 'react';

interface AnimationStates {
  brandAnimationCompleted: boolean;
  setBrandAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  homeAnimationCompleted: boolean;
  setHomeAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  entryAnimationCompleted: boolean;
  setEntryAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EntryAnimationContext = createContext<AnimationStates | undefined>(undefined);
