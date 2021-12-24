import { distinctUntilChanged, map, Observable } from 'rxjs'

export function watch<R, T>(mapFn: (value: T) => R) {
  return (observable: Observable<T>) => {
    return observable.pipe(map(mapFn), distinctUntilChanged())
  }
}
