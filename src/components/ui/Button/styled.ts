import styled from 'styled-components'

export const ActionButton = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.colors.hover};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  &[disabled] {
    opacity: 0.5;
  }
`
