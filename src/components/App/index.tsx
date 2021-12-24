import React from 'react'
import { AppActions, AppContainer, AppEmailContent, AppEmailList, AppSidebar } from 'components/App/styled'
import ContentPlaceholder from 'components/ui/ContentPlaceholder'
import FolderList from 'components/FolderList'
import useStore from 'hooks/useStore'
import EmailList from 'components/EmailList'
import ToolBar from 'components/ToolBar'

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
        <ToolBar />
      </AppActions>
      <AppEmailContent>{activeEmailContent ?? <ContentPlaceholder />}</AppEmailContent>
    </AppContainer>
  )
}

export default App
