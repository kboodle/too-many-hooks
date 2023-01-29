import { useEffect, useRef, useState } from 'react'

/**
 * `useResizeObserver` hook type
 *
 * @export
 * @typedef {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
export type UseResizeObserver = (
  target: Element | null,
  options?: ResizeObserverOptions,
) => ResizeObserverEntry[] | undefined

/**
 * Wraps a resize observer on an element
 *
 * @implements {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
const useResizeObserver: UseResizeObserver = (
  target: Element | null,
  options?: ResizeObserverOptions,
): ResizeObserverEntry[] | undefined => {
  const [entries, setEntries] = useState<ResizeObserverEntry[]>()

  const observer = useRef(new ResizeObserver(setEntries))

  useEffect(() => {
    if (target) {
      const current = observer.current
      current.observe(target, options)

      return () => {
        current.unobserve(target)
      }
    }
  }, [target, observer, options])

  return entries
}

export default useResizeObserver
