import React from 'react'
import { $emitter } from 'data/emitter'
import { $emails } from 'data/emails'
import useObservable from 'hooks/useObservable'
import useDidMount from 'hooks/useDidMount'
import { AppActions, AppContainer, AppEmailList, AppPreview, AppSidebar } from 'components/App/styled'
import EmailCard from 'components/EmailCard'

function App() {
  const [emails] = useObservable($emails)

  useDidMount(() =>
    $emitter.next({
      type: 'REQUEST_EMAILS_LIST',
    })
  )

  return (
    <AppContainer>
      <AppSidebar></AppSidebar>
      <AppEmailList>
        {emails?.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </AppEmailList>
      <AppActions>Action appears here</AppActions>
      <AppPreview></AppPreview>
    </AppContainer>
  )
}

export default App
