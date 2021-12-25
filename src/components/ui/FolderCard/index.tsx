import { FolderCardContainer } from 'components/ui/FolderCard/styled'
import { memo } from 'react'

interface FolderCardProps extends Omit<JSX.IntrinsicElements['div'], 'ref'> {
  folder: Folder
  isActive?: boolean
}

function FolderCard({ folder, isActive, ...divProps }: FolderCardProps) {
  return (
    <FolderCardContainer isActive={!!isActive} {...divProps}>
      <span>{folder.name}</span>
    </FolderCardContainer>
  )
}

export default memo(FolderCard)
