export default function request<D extends (...params: any) => any>(
  url: string,
  fake: D,
  ...args: Parameters<D>
): Promise<{
  data: ReturnType<D>
}> {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 600, { data: fake(...args) }))
}
