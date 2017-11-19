import React from 'react'
import { NavLink } from 'react-router-dom'
import { getCartItems, getCartTotal } from '../api'
import Total from './Total'
import './Nav.css'

const Nav = ({ cart, items }) => {
  let cartItems = getCartItems(cart, items)
  let cartTotal = getCartTotal(cartItems).toFixed(2)

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
        {cartTotal > 0 && <Total total={cartTotal} />}
      </ul>
    </nav>
  )
}

export default Nav
