import { useState, useEffect } from 'react';

/**
 * useScreenSize custom hook
 * @returns {string} - returns the current screen size as a string to match mantine's breakpoints (xs, sm, md, lg, xl)
 */
export const useScreenSize = () : string => {
    const [screenSize, setScreenSize] = useState<string>('');

    const calculateScreenSize = () => {
        const width = window.innerWidth;
        if (width < 576) {
            return 'xs';
        } if (width < 768) {
            return 'sm';
        } if (width < 992) {
            return 'md';
        } if (width < 1200) {
            return 'lg';
        }
            return 'xl';
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(calculateScreenSize());
        };
        handleResize(); // set the screenSize on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
};
