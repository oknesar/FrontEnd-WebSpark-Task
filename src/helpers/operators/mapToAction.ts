import { ActionPayload, Actions } from 'data/emitter'
import { map, Observable } from 'rxjs'

export default function mapToAction<T extends Actions['type']>(type: T) {
  return (observable: Observable<ActionPayload<T>>) =>
    observable.pipe(
      map((payload) => ({
        type,
        payload,
      }))
    )
}
