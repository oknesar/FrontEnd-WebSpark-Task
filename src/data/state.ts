import { $emitter } from 'data/emitter'
import { merge, Observable, scan, share } from 'rxjs'
import { $emails } from 'data/effects/emails'

const $effects: Observable<ActionLike> = merge($emails)

const $state = merge($emitter, $effects).pipe(
  scan((state, action) => {
    return state
  }, {}),
  share()
)

export default $state
