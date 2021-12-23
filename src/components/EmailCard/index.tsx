import { EmailCardContainer } from 'components/EmailCard/styled'

interface EmailCardProps {
  email: EmailRecord
}

export default function EmailCard({ email }: EmailCardProps) {
  return <EmailCardContainer>{JSON.stringify(email)}</EmailCardContainer>
}
