import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="App-content">
          <ul className="ItemPage-items">
            <li className="ItemPage-item">
              <div className="Item">
                <div className="Item-left">
                  <img className="Item-image" />
                  <div className="Item-title">Product Name</div>
                  <div className="Item-description">Description</div>
                </div>
                <div className="Item-right">
                  <div className="Item-price">Price</div>
                  <button className="Item-addToCart">Add to Cart</button>
                </div>
              </div>
            </li>
          </ul>

          <ul className="CartPage-items">
            <li className="CartPage-item">
              <div className="Item">
                <div className="Item-left">
                  <img className="Item-image" src="" />
                  <div className="Item-title">Product Name</div>
                  <div className="Item-description">Description</div>
                </div>
                <div className="Item-right">
                  <div className="Item-price">Price</div>
                  <div className="CartItem-controls">
                    <button className="CartItem-removeOne">&ndash;</button>
                    <span className="CartItem-count">Count</span>
                    <button className="CartItem-addOne">+</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

export default App
