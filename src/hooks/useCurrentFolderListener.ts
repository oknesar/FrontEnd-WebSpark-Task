import useDidMount from 'hooks/useDidMount'
import { interval, map, skip, take } from 'rxjs'
import { fakeEmail } from 'helpers/fakes/email'
import useEmitter from 'hooks/useEmitter'
import mapToAction from 'helpers/operators/mapToAction'
import { apiTestData } from 'api'
import $state from 'data/state'

export default function useCurrentFolderListener() {
  /* simple implementation, all new emails goes to the current folder */
  const emit = useEmitter()
  useDidMount(() => {
    const subscription = interval(3000)
      .pipe(
        skip(1),
        map(() => {
          const email = {
            ...fakeEmail(),
            date: new Date().toISOString(),
            isRead: false,
            isDeleted: false,
          }
          // to keep test data consistent
          const activeFolder = apiTestData.find((folder) => folder.id === $state.getValue().activeFolderId)
          activeFolder?.list.push(email)

          return { ...email, date: new Date() }
        }),
        take(3),
        mapToAction('NEW_EMAIL')
      )
      .subscribe(emit)

    return () => subscription.unsubscribe()
  })
}
