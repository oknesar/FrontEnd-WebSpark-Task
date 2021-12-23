import { ActionPayload, Actions } from 'data/emitter'
import { filter, map, Observable } from 'rxjs'

export default function action<T extends Actions['type']>(type: T) {
  return (source: Observable<Actions>): Observable<ActionPayload<T>> => {
    return source.pipe(
      filter((action) => action.type === type),
      map((action) => (<ActionLike>action)?.payload)
    )
  }
}
