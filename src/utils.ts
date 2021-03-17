export function getUpdatedArray<T>(
  originalArray: T[],
  index: number,
  newObject: T
) {
  return [
    ...originalArray.slice(0, index),
    { ...originalArray[index], ...newObject },
    ...originalArray.slice(index + 1)
  ];
}
