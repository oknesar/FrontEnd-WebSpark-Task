import useObservable from 'hooks/useObservable'
import $state, { State } from 'data/state'
import { distinctUntilChanged, map } from 'rxjs'

export default function useStore<T>(select: (state: State) => T): T {
  const [result] = useObservable(() => $state.pipe(map(select), distinctUntilChanged()))
  return result! // ensure state exists
}
