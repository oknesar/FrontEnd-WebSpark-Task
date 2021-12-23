/// <reference types="react-scripts" />
type Action<T extends string, P = never> = [P] extends [never] ? { type: T } : { type: T; payload: P }
