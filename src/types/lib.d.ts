/// <reference types="react-scripts" />
type Action<T extends string, P = never> = [P] extends [never]
  ? { type: T; payload?: undefined }
  : { type: T; payload: P }
type ActionLike = { type: string; payload?: any }
