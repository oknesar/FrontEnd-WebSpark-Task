import styled from 'styled-components'

export const EmailCardDate = styled.div`
  grid-area: date;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.7rem;
`
export const EmailCardReadIndicator = styled.div<{ isRead: boolean }>`
  grid-area: read;
  background-color: ${({ theme }) => theme.colors.accent};
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 2px;
  visibility: ${({ isRead }) => (isRead ? 'hidden' : 'visible')};
`
export const EmailCardFrom = styled.div`
  grid-area: from;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
`
export const EmailCardSubject = styled.div`
  grid-area: subject;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const EmailCardPreview = styled.div`
  grid-area: preview;
  color: ${({ theme }) => theme.colors.textSecondary};
  overflow: hidden;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};
`

export const EmailCardContainer = styled.div`
  display: grid;
  grid-template:
    'read from date'
    '. subject subject'
    '. preview preview';
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 0.3rem 0.4rem;
  font-size: 0.8rem;
  padding: 0.5rem 0.8rem 0;
  cursor: default;
  white-space: nowrap;
  :hover {
    background-color: ${({ theme }) => theme.colors.active};
    outline: 1px solid ${({ theme }) => theme.colors.active};
    ${EmailCardPreview} {
      border-bottom-color: transparent;
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    outline: none;

    ${EmailCardPreview} {
      border-bottom-color: transparent;
    }

    ${EmailCardDate}, ${EmailCardPreview} {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  &.deleted {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
