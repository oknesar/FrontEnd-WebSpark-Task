import { BehaviorSubject } from 'rxjs'

export interface State {
  activeEmail: EmailRecord | undefined
  activeEmailContent: string | undefined
  emails: EmailRecord[] | undefined
  activeFolderId: string | undefined
  folders: Folder[] | undefined
}

export const initialState: State = {
  folders: undefined,
  activeFolderId: undefined,
  emails: undefined,
  activeEmail: undefined,
  activeEmailContent: undefined,
}

const $state = new BehaviorSubject(initialState)
export default $state
