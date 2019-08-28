import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, CheckoutImageContainer,
  QuantityContainer, RemoveButtonContainer, TextContainer } from './CheckoutItemStyles'

const CheckoutItem = ({cartItem, removeItemFromCart, addItemToCart, clearItemFromCart}) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt='item' />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span> {quantity} </span>
        <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
