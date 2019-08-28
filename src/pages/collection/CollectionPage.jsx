import React from 'react'
import './collection_page.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem'

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <div />
  }
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items && items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}
CollectionPage.propTypes = {
  collection: PropTypes.object
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage)
