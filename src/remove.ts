/**
 * A function that takes an item from an array (and optionally its index),
 * and determines whether it is a desired item or not.
 */
type FinderFunction = (arg: any, index?: number) => boolean;

/**
 * Removes items from an array which match a finder function,
 * and returns the new array.
 *
 * Does not mutate the original array
 *
 * @param array The array from which to remove
 * @param finder A function that takes return true for the items to remove
 */
function remove<T>(array: T | T[], finder: FinderFunction): T[];

/**
 * Removes keys from an object, and returns the new object
 *
 * Does not mutate the original object.
 *
 * Keys which are nonexistent for the object will simply be ignored.
 *
 * @param object The object from which to remove
 * @param keys A key or array of keys to remove from the object
 *
 */
function remove<T>(object: T, keys: string | string[]): T;

function remove(a: any, b: any) {
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

export default remove;
