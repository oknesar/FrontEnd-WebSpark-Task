import { distinctUntilChanged, filter, from, map, merge, switchMap } from 'rxjs'
import { getEmailContent, getEmailsList } from 'api'
import mapToAction from 'helpers/operators/mapToAction'
import $state from 'data/state'

const $activeEmailChange = $state.pipe(
  map((state) => state.activeEmail?.id),
  filter(Boolean),
  distinctUntilChanged(),
  switchMap((emailId) => from(getEmailContent(emailId))),
  map(({ data }) => data),
  mapToAction('SET_ACTIVE_EMAIL_CONTENT')
)

const $activeFolderChange = $state.pipe(
  map((state) => state.activeFolderId),
  filter(Boolean),
  distinctUntilChanged(),
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
