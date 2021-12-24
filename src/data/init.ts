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
            return {
              ...state,
              folders: action.payload,
              activeFolderId: action.payload[0]?.id,
            }

          case 'EMAIL_LIST':
            return {
              ...state,
              emails: action.payload,
              activeEmail: undefined,
              activeEmailContent: undefined,
            }

          case 'SET_ACTIVE_FOLDER':
            if (state.activeFolderId !== action.payload) {
              return {
                ...state,
                activeFolderId: action.payload,
                emails: [],
                activeEmail: undefined,
                activeEmailContent: undefined,
              }
            }
            break

          case 'SET_ACTIVE_EMAIL':
            if (state.activeEmail !== action.payload) {
              return {
                ...state,
                activeEmail: action.payload,
                activeEmailContent: undefined,
              }
            }
            break

          case 'SET_ACTIVE_EMAIL_CONTENT':
            return {
              ...state,
              activeEmailContent: action.payload,
            }
        }

        return state
      }, initialState)
    )
    .subscribe($state)
}
