import {
  EmailCardContainer,
  EmailCardDate,
  EmailCardFrom,
  EmailCardPreview,
  EmailCardReadIndicator,
  EmailCardSubject,
} from 'components/ui/EmailCard/styled'

interface EmailCardProps extends Omit<JSX.IntrinsicElements['div'], 'ref'> {
  email: EmailRecord
  isActive?: boolean
}

export default function EmailCard({ email, isActive, ...divProps }: EmailCardProps) {
  return (
    <EmailCardContainer className={isActive ? 'active' : undefined} {...divProps}>
      <EmailCardReadIndicator isRead={email.isRead} />
      <EmailCardFrom>{email.from}</EmailCardFrom>
      <EmailCardDate>{email.date.toLocaleString().slice(0, -3)}</EmailCardDate>
      <EmailCardSubject>{email.subject}</EmailCardSubject>
      <EmailCardPreview>{email.contentPreview}</EmailCardPreview>
    </EmailCardContainer>
  )
}
