import FolderCard from 'components/ui/FolderCard'
import React from 'react'
import useObservable from 'hooks/useObservable'
import $state from 'data/state'

export default function FolderList() {
  const [state] = useObservable($state)

  return (
    <>
      {state?.folders.map((folder) => (
        <FolderCard isActive={state?.activeFolderId === folder.id} folder={folder} key={folder.id} />
      ))}
    </>
  )
}
