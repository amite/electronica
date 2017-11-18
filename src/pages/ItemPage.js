import React from 'react'
import Item from '../components/Item'
import PropTypes from 'prop-types'
import './ItemPage.css'
import Loader from '../components/Loader'

function ItemPage({ items, loading }) {
  let content
  if (loading) {
    content = <Loader />
  } else {
    content = (
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
  return <div>{content}</div>
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemPage
