export const getCartItems = (cart, items) => {
  let itemCounts = cart.reduce((itemCounts, itemKey) => {
    itemCounts[itemKey] = itemCounts[itemKey] || 0
    itemCounts[itemKey]++
    return itemCounts
  }, {})

  let cartItems = Object.keys(itemCounts).map(itemKey => {
    // Find the item by its id
    var item = items.find(item => item.key === itemKey)

    // Create a new "item" that also has a 'count' property
    return {
      ...item,
      count: itemCounts[itemKey]
    }
  })

  return cartItems
}

export const getCartTotal = cartItems => {
  return cartItems.reduce((total, item) => {
    let cartTotal =
      parseFloat(total, 10) + parseFloat(item.price, 10) * item.count
    return cartTotal
  }, 0)
}
