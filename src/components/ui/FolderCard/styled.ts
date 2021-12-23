import styled from 'styled-components'

export const FolderCardContainer = styled.div<{ isActive: boolean }>`
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  cursor: default;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;

  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.active : 'none')};

  :hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`

export const FolderCardItemsAmount = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  margin-left: 0.5rem;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  font-size: 0.7rem;
  text-transform: none;
`
