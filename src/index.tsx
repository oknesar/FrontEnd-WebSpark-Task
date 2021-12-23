import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import reportWebVitals from 'reportWebVitals'

// remove </React.StrictMode> because of issue with javascript debugger @see https://github.com/facebook/react/issues/22720
ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
