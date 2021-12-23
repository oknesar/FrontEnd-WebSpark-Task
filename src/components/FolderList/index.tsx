import FolderCard from 'components/ui/FolderCard'
import React from 'react'
import useObservable from 'hooks/useObservable'
import $state from 'data/state'
import { $emitter } from 'data/emitter'

export default function FolderList() {
  const [state] = useObservable($state)

  return (
    <>
      {state?.folders.map((folder) => (
        <FolderCard
          isActive={state?.activeFolderId === folder.id}
          folder={folder}
          key={folder.id}
          onClick={() => {
            $emitter.next({
              type: 'SET_ACTIVE_FOLDER',
              payload: folder.id,
            })
          }}
        />
      ))}
    </>
  )
}
