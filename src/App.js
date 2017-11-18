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
    loading: true
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

  handleTabChange = index => {
    this.setState({
      activeTab: index
    })
  }

  render() {
    let { activeTab, items, loading } = this.state
    console.log(items)

    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">
          {activeTab === 0 ? (
            <ItemPage loading={loading} items={items} />
          ) : (
            <CartPage />
          )}
        </main>
      </div>
    )
  }
}

export default App
