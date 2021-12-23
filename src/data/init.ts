import { merge, Observable, scan, tap } from 'rxjs'
import { $emitter, Actions } from 'data/emitter'
import { $emails } from 'data/effects/emails'
import { $folders } from 'data/effects/folders'
import $state, { initialState } from 'data/state'

export default function initState() {
  const $effects: Observable<Actions> = merge($emails, $folders)
  merge($emitter, $effects)
    .pipe(
      tap((action) => {
        if (process.env.NODE_ENV === 'development') console.info(action)
      }),
      scan((state, action) => {
        switch (action.type) {
          case 'FOLDER_LIST':
            state.folders = action.payload
            state.activeFolderId = action.payload[0]?.id
            break
          case 'EMAIL_LIST':
            state.emails = action.payload
            break
          case 'SET_ACTIVE_FOLDER':
            if (state.activeFolderId !== action.payload) {
              state.activeFolderId = action.payload
              state.emails = []
            }
            break
        }

        return state
      }, initialState)
    )
    .subscribe($state)
}
