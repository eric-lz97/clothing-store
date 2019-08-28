import React from 'react'
import PropTypes from 'prop-types'
import { CustomButtonContainer } from './CustomButtonStyles'

const CustomButton = ({ children, isGoogleSignIn, isShoppingCart, isShoppingItem, ...props }) => {
  return (
    <CustomButtonContainer isShoppingCart={isShoppingCart} isGoogleSignIn={isGoogleSignIn}
      isShoppingItem={isShoppingItem} {...props}>
      {children}
    </CustomButtonContainer>
  )
}
CustomButton.propTypes = {
  isGoogleSignIn: PropTypes.bool,
  isShoppingCart: PropTypes.bool,
  isShoppingItem: PropTypes.bool,
  children: PropTypes.string.isRequired
}
export default CustomButton
