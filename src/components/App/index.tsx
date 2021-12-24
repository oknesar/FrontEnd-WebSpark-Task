import React from 'react'
import { AppActions, AppContainer, AppEmailList, AppEmailContent, AppSidebar } from 'components/App/styled'
import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'
import FolderList from 'components/FolderList'
import useStore from 'hooks/useStore'
import EmailList from 'components/EmailList'

function App() {
  const activeEmailContent = useStore((state) => state.activeEmailContent)

  return (
    <AppContainer>
      <AppSidebar>
        <FolderList />
      </AppSidebar>
      <AppEmailList>
        <EmailList />
      </AppEmailList>
      <AppActions>
        {!!activeEmailContent && (
          <>
            <Button type='action'>
              <FaEye />
            </Button>
            <Button type='action'>
              <FaTrash />
            </Button>
          </>
        )}
      </AppActions>
      <AppEmailContent>{activeEmailContent ?? <ContentPlaceholder />}</AppEmailContent>
    </AppContainer>
  )
}

export default App
