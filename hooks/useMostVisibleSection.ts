import { useState, useEffect, useRef, RefObject } from 'react';
import useIsInViewport from './useIsInViewport';

interface Section {
  id: string;
  entry: IntersectionObserverEntry | null;
}

/**
 * `useMostVisibleSection` Hook
 *
 * This hook determines which section (home, about, projects, contact) is the most visible in the viewport.
 * It uses the `useIsInViewport` hook to check the visibility of each section and returns the most visible section's ID.
 */
export const useMostVisibleSection = () => {
  const homeRef: RefObject<HTMLElement> = useRef(null);
  const aboutRef: RefObject<HTMLElement> = useRef(null);
  const projectsRef: RefObject<HTMLElement> = useRef(null);
  const contactRef: RefObject<HTMLElement> = useRef(null);

  const homeInView = useIsInViewport(homeRef);
  const aboutInView = useIsInViewport(aboutRef);
  const projectsInView = useIsInViewport(projectsRef);
  const contactInView = useIsInViewport(contactRef);

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections: Section[] = [
      { id: 'home', entry: homeInView },
      { id: 'about', entry: aboutInView },
      { id: 'projects', entry: projectsInView },
      { id: 'contact', entry: contactInView },
    ];

    const mostVisibleSection = sections.reduce((prev, curr) => (curr.entry?.intersectionRatio || 0) > (prev.entry?.intersectionRatio || 0) ? curr : prev, { id: '', entry: null } as Section);

    setActiveSection(mostVisibleSection.id);
  }, [homeInView, aboutInView, projectsInView, contactInView]);

  return { activeSection, homeRef, aboutRef, projectsRef, contactRef };
};
