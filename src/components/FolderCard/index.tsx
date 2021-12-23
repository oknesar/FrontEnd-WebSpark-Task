import { FolderCardContainer, FolderCardItemsAmount } from './styled'

interface FolderCardProps {
  folder: Folder
  isActive?: boolean
}

export default function FolderCard({ folder, isActive }: FolderCardProps) {
  return (
    <FolderCardContainer isActive={!!isActive}>
      <span>{folder.name}</span>
      <FolderCardItemsAmount>
        {Math.min(folder.items, 999)}
        {folder.items > 999 ? '+' : ''}
      </FolderCardItemsAmount>
    </FolderCardContainer>
  )
}
