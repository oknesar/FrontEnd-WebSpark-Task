import { LoaderContainer } from 'components/ui/Loader/styled'

interface LoaderProps {
  loading?: boolean
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <LoaderContainer isLoading={!!loading}>
      <span>Loading</span>
    </LoaderContainer>
  )
}
