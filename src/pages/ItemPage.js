import React from 'react'
import './ItemPage.css'
import './Item.css'

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <div className="Item">
            <div className="Item-left">
              <img className="Item-image" src={item.img} alt={item.name} />
              <div className="Item-title">{item.name}</div>
              <div className="Item-description">{item.description}</div>
            </div>
            <div className="Item-right">
              <div className="Item-price">{item.price}</div>
              <button className="Item-addToCart">Add to Cart</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ItemPage
