import styled from 'styled-components'

export const AppContainer = styled.main`
  display: grid;
  grid-template-areas:
    'sidebar list actions'
    'sidebar list preview';
  grid-template-columns: 200px 300px 1fr;
  grid-template-rows: 40px 1fr;
  height: 100vh;
  width: 100vw;
`

export const AppSidebar = styled.section`
  grid-area: sidebar;
  overflow: hidden auto;
`
export const AppEmailList = styled.section`
  grid-area: list;
  overflow: hidden auto;
`
export const AppPreview = styled.section`
  grid-area: preview;
  overflow: auto;
`

export const AppActions = styled.section`
  grid-area: actions;
  overflow: hidden;
  align-self: center;
`
