import { useState } from 'react';
import { EntryAnimationContext } from '../contexts/EntryAnimationContext';

export const EntryAnimationCompletedProvider = ({ children }: any) => {
    const [brandAnimationCompleted, setBrandAnimationCompleted] = useState(false);
    const [homeAnimationCompleted, setHomeAnimationCompleted] = useState(false);
    const [entryAnimationCompleted, setEntryAnimationCompleted] = useState(false);
    return (
        <EntryAnimationContext.Provider
          value={{
                brandAnimationCompleted,
                setBrandAnimationCompleted,
                homeAnimationCompleted,
                setHomeAnimationCompleted,
                entryAnimationCompleted,
                setEntryAnimationCompleted,
            }}
        >
            {children}
        </EntryAnimationContext.Provider>
    );
};
