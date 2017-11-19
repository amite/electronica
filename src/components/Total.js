import React from 'react'

const Total = ({ total, numItemsInCart }) => {
  let itemString = numItemsInCart > 1 ? 'items' : 'item'
  return (
    <li className="App-nav-item total">
      Total: ${total}{' '}
      <span>
        ({numItemsInCart} {itemString})
      </span>
    </li>
  )
}

export default Total
