import React from 'react'
import './CartPage.css'

function CartPage() {
  return (
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
  )
}

export default CartPage
