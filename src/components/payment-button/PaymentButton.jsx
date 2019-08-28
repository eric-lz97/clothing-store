import React from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'

const PaymentButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

  const onToken = token => {
    // TODO: pass token to backend to create charge
    // eslint-disable-next-line no-undef
    alert(process.env.REACT_APP_PAYMENT_SUCCESSFUL_MESSAGE)
    console.log(token)
  }

  return (
    <StripeCheckout
      label={process.env.REACT_APP_PAYMENT_BUTTON_NAME}
      name={process.env.REACT_APP_BUSINESS_NAME}
      image={process.env.REACT_APP_BUSINESS_LOGO_URL}
      stripeKey={publishableKey}
      billingAdress
      shippingAddress
      amount={priceInCents}
      panelLabel={process.env.REACT_APP_PAYMENT_BUTTON_NAME}
      token={onToken}
    />
  )
}

PaymentButton.propTypes = {
  price: PropTypes.number.isRequired
}

export default PaymentButton
