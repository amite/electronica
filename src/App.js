import React, { Component } from 'react'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li className="App-nav-item">
              <a>Items</a>
            </li>
            <li className="App-nav-item">
              <a>Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default App
