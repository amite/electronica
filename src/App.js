import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import { db } from './firebase'
import { getCartItems, getCartTotal } from './api'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.itemsRef = db.collection('items')
  }

  state = {
    activeTab: 0,
    items: [],
    loading: true,
    cart: []
  }

  onItemsLoaded = querySnapshot => {
    const items = []
    querySnapshot.forEach(doc => {
      const { id, name, description, price, img } = doc.data()
      items.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        description,
        price,
        img
      })
    })
    this.setState({
      items,
      loading: false
    })
  }

  componentWillMount() {
    // FIREBASE
    this.unsubscribeQueryListener = this.itemsRef.onSnapshot(this.onItemsLoaded)
  }

  componentWillUnmount() {
    // FIREBASE
    this.unsubscribeQueryListener()
  }

  handleAddToCart = item => {
    this.setState(prevState => {
      return {
        cart: [...prevState.cart, item.key]
      }
    })
  }

  handleRemove = item => {
    let index = this.state.cart.indexOf(item.key)
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })
  }

  renderCart = props => {
    const { cart, items } = this.state
    let cartItems = getCartItems(cart, items)
    let cartTotal = getCartTotal(cartItems)

    console.log('TOTAL', cartTotal)

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
          <Nav />
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
