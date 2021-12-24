export default function request<D extends (...params: any) => any>(
  url: string,
  fake: D,
  ...args: Parameters<D>
): Promise<{
  data: ReturnType<D>
}> {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.min(300, Math.random() * 800), { data: fake(...args) })
  )
}
