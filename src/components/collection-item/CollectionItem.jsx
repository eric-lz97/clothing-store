import React from 'react'
import PropTypes from 'prop-types'
import './collection_item.scss'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/CustomButton'

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton isShoppingCart onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
    </div>
  )
}
CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
