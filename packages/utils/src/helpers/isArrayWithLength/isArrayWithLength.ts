/**
 * If items is an array with a length greater than zero, return true, otherwise return false.
 * @param {T[]} [items] - The array to check
 */
export const isArrayWithLength = <T>(items?: T[] | null): items is T[] =>
  !!items && Array.isArray(items) && items.length > 0;
