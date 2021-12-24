import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import React from 'react'
import useStore from 'hooks/useStore'
import Loader from 'components/ui/Loader'

export function EmailContent() {
  const activeEmail = useStore((state) => state.activeEmail)
  const activeEmailContent = useStore((state) => state.activeEmailContent)

  return (
    <>
      <Loader loading={activeEmail && !activeEmailContent} />
      {activeEmailContent}
      {!(activeEmail && !activeEmailContent) && <ContentPlaceholder />}
    </>
  )
}
