import { BehaviorSubject } from 'rxjs'

export interface State {
  emails: EmailRecord[]
  activeFolderId: string | undefined
  folders: Folder[]
}

export const initialState: State = {
  folders: [],
  activeFolderId: undefined,
  emails: [],
}

const $state = new BehaviorSubject(initialState)
export default $state
