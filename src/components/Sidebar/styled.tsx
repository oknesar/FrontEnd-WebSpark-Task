import styled from 'styled-components'

export const SidebarContainer = styled.section`
  grid-area: sidebar;
  overflow: hidden auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`
