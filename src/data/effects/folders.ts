import { from, map, switchMap } from 'rxjs'
import { getEmailsList, getFoldersList } from 'api'
import { $emitter } from 'data/emitter'
import action from 'helpers/operators/action'
import mapToAction from 'helpers/operators/mapToAction'

export const $folders = $emitter.pipe(
  action('INIT'),
  switchMap(() => from(getFoldersList())),
  map(({ data }) => data),
  mapToAction('FOLDER_LIST')
)
