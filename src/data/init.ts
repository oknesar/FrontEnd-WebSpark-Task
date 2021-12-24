import { merge, scan } from 'rxjs'
import { $emitter } from 'data/emitter'
import { $emails } from 'data/effects/emails'
import { $folders } from 'data/effects/folders'
import $state, { initialState } from 'data/state'

export default function initState() {
  merge($emails, $folders).subscribe($emitter)

  $emitter
    .pipe(
      scan((state, action) => {
        if (process.env.NODE_ENV === 'development') console.info(action)
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
            if (state.activeEmail?.id !== action.payload?.id) {
              return {
                ...state,
                activeEmail: { ...action.payload },
                activeEmailContent: undefined,
              }
            }
            break

          case 'SET_ACTIVE_EMAIL_CONTENT':
            return {
              ...state,
              activeEmailContent: action.payload,
            }

          case 'TOGGLE_EMAIL_READ':
            const index = state.emails.findIndex((email) => email.id === action.payload)
            if (index !== -1) {
              const targetEmail = state.emails[index]
              const nextEmail = {
                ...targetEmail,
                isRead: !targetEmail.isRead,
              }

              return {
                ...state,
                emails: state.emails
                  .slice(0, index)
                  .concat(nextEmail)
                  .concat(state.emails.slice(index + 1)),
                activeEmail: state.activeEmail?.id === nextEmail.id ? nextEmail : state.activeEmail,
              }
            }
            break
        }

        return { ...state }
      }, initialState)
    )
    .subscribe($state)
}
