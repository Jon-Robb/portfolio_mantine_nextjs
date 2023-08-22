import { useEffect, useState, useMemo } from 'react';

/**
 * Custom hook to determine if a DOM element is in the viewport.
 *
 * @param {React.RefObject<HTMLElement>} ref - React ref pointing to the DOM element to observe.
 * @returns {boolean} - `true` if the element is in the viewport, `false` otherwise.
 *
 * @example
 * const ref = useRef(null);
 * const isInViewport = useIsInViewport(ref);
 * <div ref={ref}>...</div>
 */
const useIsInViewport = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
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

  return isIntersecting;
};

export default useIsInViewport;
