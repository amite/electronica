import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="App-content">
          <ItemPage />
          <CartPage />
        </main>
      </div>
    )
  }
}

export default App
