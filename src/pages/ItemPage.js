import React from 'react'
import './ItemPage.css'

function ItemPage({ items, onAddToCart }) {
  return (
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
  )
}

export default ItemPage
