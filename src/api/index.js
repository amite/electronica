export const addToCart = item => prevState => {
  return {
    cart: [...prevState.cart, item.key]
  }
}

export const removeFromCart = item => prevState => {
  let index = prevState.cart.indexOf(item.key)

  console.log('cart before removal', prevState.cart)

  var arr2 = prevState.cart.filter(function(item, ind) {
    if (index !== ind) {
      return true
    }
  })

  console.log('cart after removal', arr2)

  return {
    cart: arr2
  }
}

export const saveCart = newCart =>
  localStorage.setItem('cart', JSON.stringify(newCart))

export const loadCart = () => JSON.parse(localStorage.getItem('cart')) || []

export const loadItems = querySnapshot => prevState => {
  const items = []
  querySnapshot.forEach(doc => {
    const { id, name, description, price, img } = doc.data()
    items.push({
      key: doc.id,
      name,
      description,
      price,
      img
    })
  })

  return {
    items,
    loading: false
  }
}

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
