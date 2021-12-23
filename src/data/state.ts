import { $emitter, Actions } from 'data/emitter'
import { merge, Observable, scan, share } from 'rxjs'
import { $emails } from 'data/effects/emails'
import { $folders } from 'data/effects/folders'

const $effects: Observable<Actions> = merge($emails, $folders)

const $state = merge($emitter, $effects).pipe(
  scan(
    (state, action) => {
      switch (action.type) {
        case 'FOLDER_LIST':
          state.folders = action.payload
          state.activeFolderId = action.payload[0]?.id
      }

      return state
    },
    {
      folders: [] as Folder[],
      activeFolderId: undefined as undefined | string,
    }
  ),
  share()
)

export default $state
