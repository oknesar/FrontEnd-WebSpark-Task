import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'
import { useCallback } from 'react'
import useStore from 'hooks/useStore'
import useEmitter from 'hooks/useEmitter'
import { ToolbarButtonGroup, ToolbarContainer } from 'components/Toolbar/styled'

export default function Toolbar() {
  const activeEmail = useStore((state) => state.activeEmail)
  const activeEmailContent = useStore((state) => state.activeEmailContent)
  const emit = useEmitter()
  const handleToggleVisible = useCallback(
    () =>
      activeEmail?.id &&
      emit({
        type: 'TOGGLE_EMAIL_READ',
        payload: activeEmail?.id,
      }),
    [activeEmail?.id]
  )

  const handleDeleteEmail = useCallback(
    () =>
      activeEmail?.id &&
      emit({
        type: 'DELETE_EMAIL',
        payload: activeEmail?.id,
      }),
    [activeEmail?.id]
  )

  if (!activeEmailContent) return null
  return (
    <ToolbarContainer>
      <ToolbarButtonGroup>
        <Button disabled={activeEmail?.isDeleted} type='action' onClick={handleToggleVisible}>
          <FaEye />
        </Button>
        <Button
          disabled={activeEmail?.isDeleted}
          type='action'
          onClick={handleDeleteEmail}
          cancelWindowTime={5000}
        >
          <FaTrash />
        </Button>
      </ToolbarButtonGroup>
    </ToolbarContainer>
  )
}
