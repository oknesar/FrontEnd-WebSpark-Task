import { from, map, switchMap } from 'rxjs'
import { getEmailsList } from 'api'
import { $emitter } from 'data/emitter'
import action from 'helpers/operators/action'
import mapToAction from 'helpers/operators/mapToAction'

export const $emails = $emitter.pipe(
  action('REQUEST_EMAIL_LIST'),
  switchMap((folderId) => from(getEmailsList(folderId))),
  map(({ data }) =>
    data.map((email) => ({
      ...email,
      date: new Date(email.date),
    }))
  ),
  mapToAction('EMAIL_LIST')
)
