import styled, { keyframes } from 'styled-components'

const dots = keyframes`
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  66% {
    content: "..";
  }
  99% {
    content: "...";
  }
`
export const LoaderContainer = styled.div<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.secondary};
  opacity: 0.5;
  align-items: center;
  justify-content: center;

  span::after {
    position: absolute;
    content: '';
    animation: ${dots} 1.8s infinite;
  }
`
