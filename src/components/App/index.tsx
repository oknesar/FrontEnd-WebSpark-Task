import React from 'react'
import { AppActions, AppContainer, AppEmailList, AppEmailContent, AppSidebar } from 'components/App/styled'
import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'
import FolderList from 'components/FolderList'
import EmailCard from 'components/ui/EmailCard'
import useStore from 'hooks/useStore'

function App() {
  const emails = useStore((state) => state.emails)

  return (
    <AppContainer>
      <AppSidebar>
        <FolderList />
      </AppSidebar>
      <AppEmailList>
        {emails.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </AppEmailList>
      <AppActions>
        {false && (
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
      <AppEmailContent>
        <ContentPlaceholder />
      </AppEmailContent>
    </AppContainer>
  )
}

export default App
