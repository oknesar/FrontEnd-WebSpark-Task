import { BehaviorSubject } from 'rxjs'

export type Actions =
  | Action<'INIT'>
  | Action<'REQUEST_EMAIL_LIST', string>
  | Action<'FOLDER_LIST', Folder[]>
  | Action<'EMAIL_LIST', EmailRecord[]>

export type ActionPayload<T extends Actions['type']> = Extract<Actions, { type: T }> extends {
  payload: infer P
}
  ? P
  : undefined

export const $emitter = new BehaviorSubject<Actions>({ type: 'INIT' })
