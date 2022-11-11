import { FinderFunction } from '@ejshafran/types';

/**
 * Removes items from an array which match a finder function,
 * and returns the new array.
 *
 * Does not mutate the original array.
 *
 * @param target The array or object from which to remove.
 * @param finder A function that takes return true for the items to remove.
 */
function removeFrom<T>(target: T | T[], finder: FinderFunction): T[];

/**
 * Removes keys from an object, and returns the new object.
 *
 * Does not mutate the original object.
 *
 * Keys which are nonexistent for the object will simply be ignored.
 *
 * @param target The array or object from which to remove.
 * @param keys A key or array of keys (or indices) to remove.
 *
 */
function removeFrom<T>(
  target: T,
  keys: string | string[] | number | number[],
): T;

function removeFrom(a: any, b: any) {
  if (a instanceof Array) return a.filter((item, index) => !b(item, index));
  return Object.fromEntries(
    Object.entries(a).filter(([key, value], index) =>
      b instanceof Function
        ? !b(value, index)
        : b instanceof Array
        ? !b.includes(key)
        : key !== b,
    ),
  );
}

export default removeFrom;
