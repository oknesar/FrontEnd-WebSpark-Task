import { Subject } from 'rxjs'

export type Actions = Action<'REQUEST_EMAILS_LIST'>

export const $emitter = new Subject<Actions>()
