import React from 'react'
import { $emitter } from 'data/emitter'
import { $emails } from 'data/emails'
import useObservable from 'hooks/useObservable'
import useDidMount from 'hooks/useDidMount'

function App() {
  const [emails] = useObservable($emails)

  useDidMount(() =>
    $emitter.next({
      type: 'REQUEST_EMAILS_LIST',
    })
  )

  return <div className='App'>{JSON.stringify(emails)}</div>
}

export default App
