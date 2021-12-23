export default function range<P extends (i: number) => any>(
  length: number,
  predicate?: P
): Array<P extends undefined ? number : ReturnType<P>> {
  return Array.from({ length }, (_, i) => (predicate ? predicate(i) : i + 1))
}
