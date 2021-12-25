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
