import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'
import React, { useCallback } from 'react'
import useStore from 'hooks/useStore'
import useEmitter from 'hooks/useEmitter'
import styled from 'styled-components'

const ToolBarContent = styled.div`
  padding: 0.5rem 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 0.4rem;
`

export default function ToolBar() {
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
    <ToolBarContent>
      <Button disabled={activeEmail?.isDeleted} type='action' onClick={handleToggleVisible}>
        <FaEye />
      </Button>
      <Button disabled={activeEmail?.isDeleted} type='action' onClick={handleDeleteEmail}>
        <FaTrash />
      </Button>
    </ToolBarContent>
  )
}
