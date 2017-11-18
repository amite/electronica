import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import { db } from './firebase'

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
    this.setState({
      cart: [...this.state.cart, item.key]
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

  handleTabChange = index => {
    this.setState({
      activeTab: index
    })
  }

  renderCart() {
    let itemCounts = this.state.cart.reduce((itemCounts, itemKey) => {
      itemCounts[itemKey] = itemCounts[itemKey] || 0
      itemCounts[itemKey]++
      return itemCounts
    }, {})

    let cartItems = Object.keys(itemCounts).map(itemKey => {
      // Find the item by its id
      var item = this.state.items.find(item => item.key === itemKey)

      // Create a new "item" that also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemKey]
      }
    })

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemove}
      />
    )
  }

  renderContent() {
    let { activeTab, items, loading, cart } = this.state
    switch (activeTab) {
      case 0:
        return (
          <ItemPage
            onAddToCart={this.handleAddToCart}
            loading={loading}
            items={items}
          />
        )

      case 1:
        return this.renderCart()
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          activeTab={this.state.activeTab}
          onTabChange={this.handleTabChange}
        />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    )
  }
}

export default App
