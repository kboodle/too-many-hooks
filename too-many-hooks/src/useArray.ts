import { useCallback, useState } from 'react'

/**
 * Return values of the `useArray` hook
 *
 * @export
 * @typedef {UseArrayReturn}
 * @template T
 */
export type UseArrayReturn<T> = [
  T[],
  {
    /**
     * The default React state setter for the entire array
     *
     * @readonly
     * @type {React.Dispatch<React.SetStateAction<T[]>>}
     */
    readonly set: React.Dispatch<React.SetStateAction<T[]>>

    /**
     * Empties the array
     *
     * @type {() => void}
     */
    readonly clear: () => void
    /**
     * Resets the array to its initial value
     *
     * @type {() => void}
     */
    readonly reset: () => void

    /**
     * Adds element(s) to the end of the array
     *
     * @readonly
     * @type {(...elements: T[]) => void}
     * @param {T[]} ...elements
     */
    readonly push: (...elements: T[]) => void
    /**
     * Inserts element(s) at an index, shifting the remaining elements right.
     * If the index is out of range the elements are pushed to the end.
     *
     * @readonly
     * @type {(index: number, ...elements: T[]) => void}
     * @param {number} index
     * @param {T[]} elements
     */
    readonly insertAt: (index: number, ...elements: T[]) => void
    /**
     * Removes an element at an index, shifting the remaining elements left.
     * If the index is out of range, no change occurs.
     *
     * @readonly
     * @type {(index: number) => void}
     * @param {number} index
     *
     */
    readonly removeAt: (index: number) => void
    /**
     * Removes elements from the array that meet a condition.
     * Like JS `Array.filter` with the results applied to the array state.
     *
     * @readonly
     * @type {(predicate: (element: T) => boolean) => void}
     * @param {predicate: (element: T) => boolean} predicate
     */
    readonly removeWhere: (predicate: (element: T) => boolean) => void
    /**
     * Removes elements from the array outside of a certain range.
     * Like JS `Array.slice` with the results applied to the array state.
     *
     * @readonly
     * @type {(start?: number, end?: number) => void}
     * @param {number?} start
     * @param {number?} end
     */
    readonly trimToRange: (start?: number, end?: number) => void

    /**
     * Updates element(s) at an index. For each additional element, subsequent elements are updated.
     *
     * @example
     * Updating `['a', 'b', 'c']` to `['a', 'd', 'e']
     * ```ts
     * updateAt(1, 'd', 'e')
     * ```
     *
     * @readonly
     * @type {(index: number, ...elements: React.SetStateAction<T>[]) => void}
     * @param {number} index
     * @param {React.SetStateAction<T>[]} elements
     */
    readonly updateAt: (index: number, ...elements: React.SetStateAction<T>[]) => void
    /**
     * Updates element(s) that match a predicate
     *
     * @example
     * Updating records with `lastUpdated` before Dec 23 2022 to have `isCurrent`=`false`
     * ```ts
     * const oldestCurrentDate = new Date('12-23-2022')
     * updateWhere((record) => record.lastUpdated < oldestCurrentDate, )
     * ```
     *
     * @readonly
     * @type {(predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) => void}
     * @param {predicate: (element: T) => boolean} predicate
     * @param {React.SetStateAction<T>} newElement
     */
    readonly updateWhere: (
      predicate: (element: T) => boolean,
      newElement: React.SetStateAction<T>,
    ) => void
    /**
     * Transforms all elements to new values.
     * Like JS `Array.map` with the results applied to the array state.
     *
     * @readonly
     * @type {(newElement: React.SetStateAction<T>) => void}
     * @param {React.SetStateAction<T>} newElement
     */
    readonly updateAll: (newElement: React.SetStateAction<T>) => void

    /**
     * Sorts the array by comparing each element.
     * Like JS `Array.sort` with the results applied to the array state.
     *
     * @type {((compareFn?: ((a: T, b: T) => number) | undefined) => void)}
     * @param {((a: T, b: T) => number) | undefined} compareFn
     */
    readonly sort: (compareFn?: ((a: T, b: T) => number) | undefined) => void
    /** /**
     * Reverses the order of the elements in the array.
     * Like JS `Array.reverse` with the results applied to the array state.
     *
     * @type {() => void)}
     */
    readonly reverse: () => void
  },
]

/**
 * `useArray` hook type
 *
 * @export
 * @typedef {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
export type UseArray<T> = (initial: T[]) => UseArrayReturn<T>

/**
 * Local util for resolving set state action type to an update function or a new value
 *
 * @template T
 * @param {React.SetStateAction<T>} element
 * @returns {element is (prevState: T) => T}
 */
const isUpdateFunction = <T>(element: React.SetStateAction<T>): element is (prevState: T) => T =>
  typeof element === 'function'

/**
 * Simplifies boolean state management
 *
 * @implements {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
const useArray = <T>(initial: T[]): UseArrayReturn<T> => {
  const [array, setArray] = useState<T[]>(initial)

  /**
   * Local utility for resolving a setStateAction on an element
   *
   * @type {(previousState: T, updaterOrValue: React.SetStateAction<T>) => T}
   */
  const setElement: (previousState: T, updaterOrValue: React.SetStateAction<T>) => T = useCallback(
    (previousState: T, updaterOrValue: React.SetStateAction<T>) =>
      isUpdateFunction(updaterOrValue) ? updaterOrValue(previousState) : updaterOrValue,
    [],
  )

  const clear = useCallback(() => setArray([]), [])
  const reset = useCallback(() => setArray(initial), [initial])

  // add elements
  const push = useCallback((...elements: T[]) => setArray(array => [...array, ...elements]), [])
  const insertAt = useCallback(
    (index: number, ...elements: T[]) =>
      setArray(array => [...array.slice(0, index), ...elements, ...array.slice(index)]),
    [],
  )

  // remove elements
  const removeAt = useCallback(
    (index: number) => setArray(array => [...array.slice(0, index), ...array.slice(index + 1)]),
    [],
  )
  const removeWhere = useCallback(
    (predicate: (element: T) => boolean) => setArray(array => array.filter(predicate)),
    [],
  )
  const trimToRange = useCallback(
    (start?: number, end?: number) => setArray(array => array.slice(start, end)),
    [],
  )

  // update elements
  const updateAt = useCallback(
    (index: number, ...elements: React.SetStateAction<T>[]) =>
      setArray(array => [
        ...array.slice(0, index),
        ...elements.map((elementUpdater, elementsIndex) =>
          setElement(array[index + elementsIndex], elementUpdater),
        ),
        ...array.slice(index + elements.length),
      ]),
    [setElement],
  )
  const updateWhere = useCallback(
    (predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) =>
      setArray(array =>
        array.map(element => (predicate(element) ? setElement(element, newElement) : element)),
      ),
    [setElement],
  )
  const updateAll = useCallback(
    (newElement: React.SetStateAction<T>) =>
      setArray(array => array.map(element => setElement(element, newElement))),
    [setElement],
  )

  // standard JS array functions
  const sort = useCallback(
    (compareFn?: ((a: T, b: T) => number) | undefined) =>
      setArray(array => [...array.sort(compareFn)]),
    [],
  )
  const reverse = useCallback(() => setArray(array => [...array.reverse()]), [])

  return [
    array,
    {
      set: setArray,

      clear,
      reset,

      push,
      insertAt,

      removeAt,
      removeWhere,
      trimToRange,

      updateAt,
      updateWhere,
      updateAll,

      sort,
      reverse,
    },
  ]
}

export default useArray
