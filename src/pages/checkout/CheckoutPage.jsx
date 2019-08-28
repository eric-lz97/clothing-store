import React from 'react'
import './checkout_page.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import PaymentButton from '../../components/payment-button/PaymentButton'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className='total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className='test-warning'>
        * Please use the following test card for payments *
        <br />
        4242 4242 4242 4242 -- Expiry: 01/20 -- CVV: 123
      </div>
      <PaymentButton price={totalPrice} />
    </div>
  )
}

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)
