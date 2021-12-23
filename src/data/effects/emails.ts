import { distinctUntilChanged, filter, from, map, switchMap } from 'rxjs'
import { getEmailsList } from 'api'
import mapToAction from 'helpers/operators/mapToAction'
import $state from 'data/state'

export const $emails = $state.pipe(
  map((state) => state.activeFolderId),
  filter(Boolean),
  distinctUntilChanged(),
  switchMap((folderId) => from(getEmailsList(folderId))),
  map(({ data }) =>
    data.map((email) => ({
      ...email,
      date: new Date(email.date),
    }))
  ),
  mapToAction('EMAIL_LIST')
)
