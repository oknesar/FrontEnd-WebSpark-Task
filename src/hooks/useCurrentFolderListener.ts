import { interval, map, skip, take } from 'rxjs'
import { fakeEmail } from 'helpers/fakes/email'
import useEmitter from 'hooks/useEmitter'
import { apiTestData } from 'api'
import $state from 'data/state'
import useObservable from 'hooks/useObservable'
import { useEffect } from 'react'

export default function useCurrentFolderListener() {
  // simple implementation, all new emails goes to the current folder
  const emit = useEmitter()
  const [newEmail] = useObservable(() =>
    interval(5000).pipe(
      skip(1),
      map(() => {
        const date = new Date()
        const email = fakeEmail({
          date: date.toISOString(),
          isRead: false,
          isDeleted: false,
        })
        // to keep test data consistent
        const activeFolder = apiTestData.find((folder) => folder.id === $state.getValue().activeFolderId)
        activeFolder?.list.push(email)

        return { ...email, date }
      }),
      take(3)
    )
  )
  useEffect(() => {
    if (newEmail)
      emit({
        type: 'NEW_EMAIL',
        payload: newEmail,
      })
  }, [newEmail])
}
