import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="App-nav">
      <ul>
        <li className="App-nav-item">
          <NavLink exact activeClassName="selected" to="/">
            Items
          </NavLink>
        </li>
        <li className="App-nav-item">
          <NavLink activeClassName="selected" to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="App-nav-item">Total: $10000</li>
      </ul>
    </nav>
  )
}

export default Nav
