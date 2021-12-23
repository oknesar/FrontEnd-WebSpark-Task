import FolderCard from 'components/ui/FolderCard'
import React, { useCallback } from 'react'
import useObservable from 'hooks/useObservable'
import $state from 'data/state'
import useEmitter from 'hooks/useEmitter'

export default function FolderList() {
  const [state] = useObservable($state)
  const emit = useEmitter()
  const handleClick = useCallback(
    (e) =>
      emit({
        type: 'SET_ACTIVE_FOLDER',
        payload: e.currentTarget.dataset.id!,
      }),
    []
  )

  return (
    <>
      {state?.folders.map((folder) => (
        <FolderCard
          isActive={state?.activeFolderId === folder.id}
          folder={folder}
          key={folder.id}
          data-id={folder.id}
          onClick={handleClick}
        />
      ))}
    </>
  )
}
