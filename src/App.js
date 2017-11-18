import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import { items } from './static-data'

class App extends Component {
  state = {
    activeTab: 0
  }

  handleTabChange = index => {
    this.setState({
      activeTab: index
    })
  }

  render() {
    let { activeTab } = this.state
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">
          {activeTab === 0 ? <ItemPage items={items} /> : <CartPage />}
        </main>
      </div>
    )
  }
}

export default App
