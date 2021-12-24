import { filter, from, map, merge, switchMap } from 'rxjs'
import { getEmailContent, getEmailsList } from 'api'
import mapToAction from 'helpers/operators/mapToAction'
import $state from 'data/state'
import { watch } from 'helpers/operators/watch'

const $activeEmailChange = $state.pipe(
  watch((state) => state.activeEmail?.id),
  filter(Boolean),
  switchMap((emailId) => from(getEmailContent(emailId))),
  map(({ data }) => data),
  mapToAction('SET_ACTIVE_EMAIL_CONTENT')
)

const $activeFolderChange = $state.pipe(
  watch((state) => state.activeFolderId),
  filter(Boolean),
  switchMap((folderId) => from(getEmailsList(folderId))),
  map(({ data }) =>
    data
      .map((email) => ({
        ...email,
        date: new Date(email.date),
      }))
      .sort((a, b) => +b.date - +a.date)
  ),
  mapToAction('EMAIL_LIST')
)

export const $emails = merge($activeEmailChange, $activeFolderChange)
