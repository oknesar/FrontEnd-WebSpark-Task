import { FolderCardContainer } from 'components/ui/FolderCard/styled'

interface FolderCardProps extends Omit<JSX.IntrinsicElements['div'], 'ref'> {
  folder: Folder
  isActive?: boolean
}

export default function FolderCard({ folder, isActive, ...divProps }: FolderCardProps) {
  return (
    <FolderCardContainer isActive={!!isActive} {...divProps}>
      <span>{folder.name}</span>
    </FolderCardContainer>
  )
}
