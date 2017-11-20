import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

var cart = JSON.parse(localStorage.getItem('cart')) || []

ReactDOM.render(<App cart={cart} />, document.getElementById('root'))
registerServiceWorker()
