import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 16px;
    border: 4px solid ${({ theme }) => theme.colors.secondary};
  }

  *::-webkit-scrollbar-button {
    display:none;
  }
`

export default GlobalStyle
