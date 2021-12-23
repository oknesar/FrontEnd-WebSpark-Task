import useObservable from 'hooks/useObservable'
import $state, { State } from 'data/state'
import { distinctUntilChanged, map } from 'rxjs'

export default function useStore<F extends (state: State) => any>(select: F): readonly [ReturnType<F>, any] {
  const [result] = useObservable(() => $state.pipe(map(select), distinctUntilChanged()))
  return result! // ensure state exists
}
