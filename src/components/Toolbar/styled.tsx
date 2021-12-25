import styled from 'styled-components'

export const ToolbarContainer = styled.section`
  grid-area: actions;
  overflow: hidden;
  align-self: center;
`
export const ToolbarButtonGroup = styled.div`
  padding: 0.5rem 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 0.4rem;
`
