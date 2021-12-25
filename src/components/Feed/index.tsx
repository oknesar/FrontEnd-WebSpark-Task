import EmailList from 'components/EmailList'
import { FeedContainer } from 'components/Feed/styled'
import useDidMount from 'hooks/useDidMount'
import useEmitter from 'hooks/useEmitter'

export default function Feed() {
  const emit = useEmitter()
  useDidMount(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          return emit({
            type: 'SET_PREVIOUS_EMAIL_ACTIVE',
          })
        case 'ArrowDown':
          e.preventDefault()
          return emit({
            type: 'SET_NEXT_EMAIL_ACTIVE',
          })
      }
    }
    document.documentElement.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  })

  return (
    <FeedContainer>
      <EmailList />
    </FeedContainer>
  )
}
