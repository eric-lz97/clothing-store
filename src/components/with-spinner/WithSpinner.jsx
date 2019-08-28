import React from 'react'
import PropTypes from 'prop-types'
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...componentProps }) => {
    return isLoading
      ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
      : <WrappedComponent {...componentProps} />
  }
  Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
  }
  return Spinner
}

WithSpinner.propTypes = {
  WrappedComponent: PropTypes.object.isRequired
}

export default WithSpinner
