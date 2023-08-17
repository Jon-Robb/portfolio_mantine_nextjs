import { useState } from 'react';
import { EntryAnimationCompletedContext } from '../contexts/EntryAnimationCompletedContext';

export const EntryAnimationCompletedProvider = ({ children }: any) => {
    const [entryAnimationCompleted, setEntryAnimationCompleted] = useState(false);

    return (
        <EntryAnimationCompletedContext.Provider
          value={{
                entryAnimationCompleted, setEntryAnimationCompleted,
            }}
        >
            {children}
        </EntryAnimationCompletedContext.Provider>
    );
};
