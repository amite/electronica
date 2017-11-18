import React from 'react'
import Item from '../components/Item'
import PropTypes from 'prop-types'
import './ItemPage.css'

function ItemPage({ items, loading }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.key} className="ItemPage-item">
          <Item item={item}>
            <button className="Item-addToCart">Add to Cart</button>
          </Item>
        </li>
      ))}
    </ul>
  )
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemPage
