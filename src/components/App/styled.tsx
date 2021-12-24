import styled from 'styled-components'

export const AppContainer = styled.main`
  display: grid;
  grid-template-areas:
    'sidebar list actions'
    'sidebar list content';
  grid-template-columns: 200px 300px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`

export const AppSidebar = styled.section`
  grid-area: sidebar;
  overflow: hidden auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`
export const AppEmailList = styled.section`
  grid-area: list;
  overflow: hidden auto;
  border-left: 1px solid ${({ theme }) => theme.colors.borderSharp};
  border-right: 1px solid ${({ theme }) => theme.colors.borderSharp};
  position: relative;
`
export const AppEmailContent = styled.section`
  grid-area: content;
  overflow: auto;
  padding: 0.5rem 2rem;
  line-height: 1.4;
  position: relative;
`

export const AppToolbar = styled.section`
  grid-area: actions;
  overflow: hidden;
  align-self: center;
`
