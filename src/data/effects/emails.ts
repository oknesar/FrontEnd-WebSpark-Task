import {
  distinctUntilChanged,
  filter,
  from,
  ignoreElements,
  map,
  mapTo,
  merge,
  mergeMap,
  switchMap,
} from 'rxjs'
import { getEmailContent, getEmailsList, toggleRead } from 'api'
import mapToAction from 'helpers/operators/mapToAction'
import $state from 'data/state'
import { watch } from 'helpers/operators/watch'
import { $emitter } from 'data/emitter'
import action from 'helpers/operators/action'

const $activeEmailChange = $state.pipe(
  watch((state) => state.activeEmail?.id),
  filter(Boolean),
  switchMap((emailId) => from(getEmailContent(emailId))),
  map(({ data }) => data),
  mapToAction('SET_ACTIVE_EMAIL_CONTENT')
)

const $activeEmailContentChange = $state.pipe(
  map((state) => state.activeEmail),
  distinctUntilChanged((previous, current) => previous?.id === current?.id),
  filter(Boolean),
  filter((email) => Boolean(email && !email.isRead)),
  map((email) => email!.id),
  mapToAction('TOGGLE_EMAIL_READ')
)

const $toggleEmailRead = $emitter.pipe(
  action('TOGGLE_EMAIL_READ'),
  mergeMap((emailId) => from(toggleRead(emailId)).pipe(mapTo(emailId))),
  ignoreElements()
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

export const $emails = merge(
  $activeEmailChange,
  $activeFolderChange,
  $activeEmailContentChange,
  $toggleEmailRead
)
