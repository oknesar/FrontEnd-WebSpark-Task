import {
  EmailCardContainer,
  EmailCardDate,
  EmailCardFrom,
  EmailCardPreview,
  EmailCardReadIndicator,
  EmailCardSubject,
} from 'components/ui/EmailCard/styled'

interface EmailCardProps {
  email: EmailRecord
}

export default function EmailCard({ email }: EmailCardProps) {
  return (
    <EmailCardContainer>
      <EmailCardReadIndicator isRead={email.isRead} />
      <EmailCardFrom>{email.from}</EmailCardFrom>
      <EmailCardDate>{email.date.toLocaleString().slice(0, -3)}</EmailCardDate>
      <EmailCardSubject>{email.subject}</EmailCardSubject>
      <EmailCardPreview>{email.contentPreview}</EmailCardPreview>
    </EmailCardContainer>
  )
}
