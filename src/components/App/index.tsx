import React from 'react'
import { $emitter } from 'data/emitter'
import { $emails } from 'data/emails'
import useObservable from 'hooks/useObservable'
import useDidMount from 'hooks/useDidMount'
import { AppActions, AppContainer, AppEmailList, AppEmailContent, AppSidebar } from 'components/App/styled'
import EmailCard from 'components/ui/EmailCard'
import range from 'helpers/range'
import FolderCard from 'components/ui/FolderCard'
import { fakeFolder } from 'helpers/fakes/folder'
import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import Button from 'components/ui/Button'
import { FaEye, FaTrash } from 'react-icons/fa'

function App() {
  const [emails] = useObservable($emails)

  useDidMount(() =>
    $emitter.next({
      type: 'REQUEST_EMAILS_LIST',
    })
  )

  return (
    <AppContainer>
      <AppSidebar>
        {range(5, fakeFolder).map((folder, i) => (
          <FolderCard isActive={!i} folder={folder} key={folder.id} />
        ))}
      </AppSidebar>
      <AppEmailList>
        {emails?.map((email) => (
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
