import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

require('babel-polyfill')

ReactDom.render(<App />, window.document.getElementById('main'))