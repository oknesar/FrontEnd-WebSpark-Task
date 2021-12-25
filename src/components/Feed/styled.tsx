import styled from 'styled-components'

export const FeedContainer = styled.section`
  grid-area: list;
  overflow: hidden auto;
  border-left: 1px solid ${({ theme }) => theme.colors.borderSharp};
  border-right: 1px solid ${({ theme }) => theme.colors.borderSharp};
  position: relative;
`
