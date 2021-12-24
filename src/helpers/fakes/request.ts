export default function request<D extends (...params: any) => any>(
  url: string,
  fake: D,
  ...args: Parameters<D>
): Promise<{
  data: ReturnType<D>
}> {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.min(1000, Math.random() * 2000), { data: fake(...args) })
  )
}
