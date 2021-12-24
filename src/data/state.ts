import { BehaviorSubject } from 'rxjs'

export interface State {
  activeEmail: EmailRecord | undefined
  activeEmailContent: string | undefined
  emails: EmailRecord[]
  activeFolderId: string | undefined
  folders: Folder[]
}

export const initialState: State = {
  folders: [],
  activeFolderId: undefined,
  emails: [],
  activeEmail: undefined,
  activeEmailContent: undefined,
}

const $state = new BehaviorSubject(initialState)
export default $state
