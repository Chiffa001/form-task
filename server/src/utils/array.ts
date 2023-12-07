export const isArrayWithoutItems = (
  arr: unknown | unknown[],
): arr is unknown[] => Array.isArray(arr) && arr.length === 0;
