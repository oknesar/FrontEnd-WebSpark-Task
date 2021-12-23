import React from 'react'
import { AppActions, AppContainer, AppEmailList, AppEmailContent, AppSidebar } from 'components/App/styled'
import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'
import FolderList from 'components/FolderList'
import useObservable from 'hooks/useObservable'
import $state from 'data/state'
import EmailCard from 'components/ui/EmailCard'

function App() {
  const [state] = useObservable($state)

  return (
    <AppContainer>
      <AppSidebar>
        <FolderList />
      </AppSidebar>
      <AppEmailList>
        {state?.emails.map((email) => (
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
