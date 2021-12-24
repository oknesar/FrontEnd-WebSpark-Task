import { BehaviorSubject } from 'rxjs'

export type Actions =
  | Action<'INIT'>
  | Action<'FOLDER_LIST', Folder[]>
  | Action<'EMAIL_LIST', EmailRecord[]>
  | Action<'SET_ACTIVE_FOLDER', string>
  | Action<'SET_ACTIVE_EMAIL', EmailRecord>
  | Action<'SET_ACTIVE_EMAIL_CONTENT', string>
  | Action<'TOGGLE_EMAIL_READ', string>
  | Action<'DELETE_EMAIL', string>
  | Action<'NEW_EMAIL', EmailRecord>

export type ActionPayload<T extends Actions['type']> = Extract<Actions, { type: T }> extends {
  payload: infer P
}
  ? P
  : undefined

export const $emitter = new BehaviorSubject<Actions>({ type: 'INIT' })
