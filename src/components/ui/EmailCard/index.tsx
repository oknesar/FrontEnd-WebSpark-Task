import {
  EmailCardContainer,
  EmailCardDate,
  EmailCardFrom,
  EmailCardPreview,
  EmailCardReadIndicator,
  EmailCardSubject,
} from 'components/ui/EmailCard/styled'
import cn from 'helpers/cn'
import { memo, MouseEvent, useMemo } from 'react'

interface EmailCardProps extends Omit<JSX.IntrinsicElements['div'], 'ref' | 'onClick'> {
  email: EmailRecord
  isActive?: boolean
  onClick?: (email: EmailRecord, e: MouseEvent<HTMLDivElement>) => void
}

function EmailCard({ email, isActive, onClick, ...divProps }: EmailCardProps) {
  const handleClick = useMemo(() => {
    if (!onClick) return onClick
    return (e: MouseEvent<HTMLDivElement>) => onClick(email, e)
  }, [email, onClick])
  return (
    <EmailCardContainer
      className={cn({
        active: isActive,
        deleted: email.isDeleted,
      })}
      {...divProps}
      onClick={handleClick}
    >
      <EmailCardReadIndicator isRead={email.isRead} />
      <EmailCardFrom>{email.from}</EmailCardFrom>
      <EmailCardDate>{email.date.toLocaleString().slice(0, -3)}</EmailCardDate>
      <EmailCardSubject>{email.subject}</EmailCardSubject>
      <EmailCardPreview>{email.contentPreview}</EmailCardPreview>
    </EmailCardContainer>
  )
}

export default memo(EmailCard)
