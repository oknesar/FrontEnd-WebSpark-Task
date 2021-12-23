import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from 'components/App'
import reportWebVitals from 'reportWebVitals'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'style/global'
import theme from 'style/theme'
import initState from 'data/init'

initState()
// remove </React.StrictMode> because of issue with javascript debugger @see https://github.com/facebook/react/issues/22720
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
