export function pairs<T>(arr: T[]): Array<[T, T] | [T]> {
  return Array.from(
    { length: Math.ceil(arr.length / 2) },
    (_, i) => arr.slice(i * 2, i * 2 + 2) as [T, T] | [T]
  );
}
