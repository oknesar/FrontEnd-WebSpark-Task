import FolderCard from 'components/ui/FolderCard'
import { useCallback } from 'react'
import useEmitter from 'hooks/useEmitter'
import useStore from 'hooks/useStore'
import Loader from 'components/ui/Loader'

export default function FolderList() {
  const folders = useStore((state) => state.folders)
  const activeFolderId = useStore((state) => state.activeFolderId)
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
      <Loader loading={!folders} />
      {folders?.map((folder) => (
        <FolderCard
          isActive={activeFolderId === folder.id}
          folder={folder}
          key={folder.id}
          data-id={folder.id}
          onClick={handleClick}
        />
      ))}
    </>
  )
}
