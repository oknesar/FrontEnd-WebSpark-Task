export default function request<D extends (...params: any) => any>(
  url: string,
  fake: D,
  ...args: Parameters<D>
): Promise<{
  data: ReturnType<D>
}> {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.max(600, Math.random() * 1200), { data: fake(...args) })
  )
}
