import range from 'helpers/range'
import { fakeFolder } from 'helpers/fakes/folder'
import FolderCard from 'components/ui/FolderCard'
import React from 'react'

export default function FolderList() {
  return (
    <>
      {range(5, fakeFolder).map((folder, i) => (
        <FolderCard isActive={!i} folder={folder} key={folder.id} />
      ))}
    </>
  )
}
