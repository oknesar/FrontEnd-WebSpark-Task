import { filter, from, map, share, switchMap, tap } from 'rxjs'
import { getEmailsList } from 'api/emails'
import { $emitter } from 'data/emitter'

export const $emails = $emitter.pipe(
  filter((action) => action.type === 'REQUEST_EMAILS_LIST'),
  switchMap(() => from(getEmailsList())),
  map(({ data }) =>
    data.map((email) => ({
      ...email,
      date: new Date(email.date),
    }))
  ),
  share()
)
