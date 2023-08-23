import { useEffect, useState, useMemo } from 'react';
/**
 * `useIsInViewport` Hook
 *
 * This hook checks if a given DOM element (referenced by `ref`) is within the viewport.
 * It uses the IntersectionObserver API to monitor changes in the intersection of the target
 * element with the viewport and returns the latest IntersectionObserverEntry object.
 *
 * @param {React.RefObject<HTMLElement>} ref - A React ref object pointing to the DOM element to be observed.
 *
 * @returns {IntersectionObserverEntry | null} - The latest IntersectionObserverEntry object if the element is observed,
 *                                               otherwise returns null.
 *
 * @example
 *
 * const MyComponent = () => {
 *   const ref = useRef(null);
 *   const entry = useIsInViewport(ref);
 *
 *   const isInViewport = entry?.isIntersecting;
 *
 *   return (
 *     <div ref={ref}>
 *       {isInViewport ? 'I am in the viewport!' : 'I am not in the viewport.'}
 *     </div>
 *   );
 * };
 *
 * Note: Ensure that the target element is attached to the DOM and has dimensions (i.e., height and width)
 *       before using this hook to get accurate results.
 */
const useIsInViewport = (ref: React.RefObject<HTMLElement>, threshold: number = 0.2):
  IntersectionObserverEntry | null => {
  if (typeof IntersectionObserver === 'undefined') return null;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([newEntry]) => {
        setEntry(newEntry);
      },
        {
          threshold,
        }),
    []
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  return entry;
};

export default useIsInViewport;
