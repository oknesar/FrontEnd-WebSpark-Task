import { AppContainer } from 'components/App/styled'
import useCurrentFolderListener from 'hooks/useCurrentFolderListener'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import Toolbar from 'components/Toolbar'
import Viewport from 'components/Viewport'

function App() {
  // listen for a new emails
  useCurrentFolderListener()

  return (
    <AppContainer>
      <Sidebar />
      <Feed />
      <Toolbar />
      <Viewport />
    </AppContainer>
  )
}

export default App
