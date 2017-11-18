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
      const { name, description, price, img } = doc.data()
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
      cart: [...this.state.cart, item]
    })
  }

  handleTabChange = index => {
    this.setState({
      activeTab: index
    })
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
        return <CartPage items={cart} />
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
