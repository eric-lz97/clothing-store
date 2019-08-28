export const combineSameItems = (cartItems, cartItemToAdd) => {
  const sameItem = cartItems.find(item => cartItemToAdd.id === item.id)
  if (sameItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(item => cartItemToRemove.id === item.id)
  // if item quantity is 1 remove it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
  } else {
    // if item quantity is not 1 then find it and decrease its quantity by 1
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }
}
