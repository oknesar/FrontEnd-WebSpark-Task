import React from 'react'
import { AppContainer, AppEmailContent, AppEmailList, AppSidebar, AppToolbar } from 'components/App/styled'
import FolderList from 'components/FolderList'
import EmailList from 'components/EmailList'
import ToolBar from 'components/ToolBar'
import { EmailContent } from 'components/EmailContent'
import useCurrentFolderListener from 'hooks/useCurrentFolderListener'

function App() {
  useCurrentFolderListener()

  return (
    <AppContainer>
      <AppSidebar>
        <FolderList />
      </AppSidebar>
      <AppEmailList>
        <EmailList />
      </AppEmailList>
      <AppToolbar>
        <ToolBar />
      </AppToolbar>
      <AppEmailContent>
        <EmailContent />
      </AppEmailContent>
    </AppContainer>
  )
}

export default App
