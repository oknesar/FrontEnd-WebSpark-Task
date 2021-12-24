export default function cn(...conditions: Array<string | Record<string, any>>) {
  const className = []
  for (const condition of conditions) {
    if (typeof condition === 'string') className.push(condition)
    else
      for (const name in condition) {
        if (condition[name]) className.push(name)
      }
  }
  return className.join(' ')
}
