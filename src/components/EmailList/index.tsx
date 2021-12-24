import EmailCard from 'components/ui/EmailCard'
import useStore from 'hooks/useStore'
import useEmitter from 'hooks/useEmitter'
import Loader from 'components/ui/Loader'

export default function EmailList() {
  const emails = useStore((state) => state.emails)
  const folders = useStore((state) => state.folders)
  const activeEmailId = useStore((state) => state.activeEmail?.id)
  const emit = useEmitter()

  return (
    <>
      <Loader loading={folders && !emails} />
      {emails?.map((email) => (
        <EmailCard
          isActive={activeEmailId === email.id}
          key={email.id}
          data-id={email.id}
          email={email}
          onClick={() =>
            emit({
              type: 'SET_ACTIVE_EMAIL',
              payload: email,
            })
          }
        />
      ))}
    </>
  )
}
