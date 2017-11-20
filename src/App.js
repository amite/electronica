import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import { db } from './firebase'
import {
  loadCart,
  saveCart,
  loadItems,
  addToCart,
  removeFromCart,
  getCartItems
} from './api'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    items: [],
    loading: true,
    cart: loadCart()
  }

  componentWillMount() {
    // FIREBASE
    this.unsubscribeQueryListener = db
      .collection('items')
      .onSnapshot(querySnapshot => this.setState(loadItems(querySnapshot)))
  }

  componentWillUnmount() {
    // FIREBASE
    this.unsubscribeQueryListener()
  }

  handleAddToCart = item => {
    this.setState(addToCart(item), () => {
      saveCart(this.state.cart)
    })
  }

  handleRemove = item => {
    this.setState(removeFromCart(item), () => {
      saveCart(this.state.cart)
    })
  }

  renderCart = props => {
    const { cart, items } = this.state
    let cartItems = getCartItems(cart, items)

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemove}
      />
    )
  }

  renderItems = props => {
    return (
      <ItemPage
        onAddToCart={this.handleAddToCart}
        loading={this.state.loading}
        items={this.state.items}
      />
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav {...this.state} />
          <main className="App-content">
            <Route exact path="/" render={this.renderItems} />
            <Route path="/cart" render={this.renderCart} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
