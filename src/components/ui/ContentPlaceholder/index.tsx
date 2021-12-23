import styled from 'styled-components'
import { FaMailBulk } from 'react-icons/fa'
import React from 'react'

const ContentPlaceholderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
`

export default function ContentPlaceholder() {
  return (
    <ContentPlaceholderContainer>
      <FaMailBulk />
    </ContentPlaceholderContainer>
  )
}
