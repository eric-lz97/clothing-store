import React from 'react'
import PropTypes from 'prop-types'

import { CartItemContainer, CartItemImage, ItemDetailsContainer, CartItemDetail } from './CartItemStyles'

const CartItem = ({item: { imageUrl, price, name, quantity }}) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <CartItemDetail>{name}</CartItemDetail>
        <CartItemDetail>{quantity} x ${price}</CartItemDetail>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
