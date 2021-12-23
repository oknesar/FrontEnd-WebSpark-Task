import { filter, from, map, Observable, share, switchMap } from 'rxjs'
import { getEmailsList } from 'api/emails'
import { $emitter } from 'data/emitter'

export const $emails: Observable<EmailRecord[]> = $emitter.pipe(
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
