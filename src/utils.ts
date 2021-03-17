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

export function getDateInputValue(inputValue: string): Date {
  // inputValue is like YYYY-MM-DD
  // const [year, , month] = inputValue.split("-");
  const date = new Date(inputValue);
  return date;
}
