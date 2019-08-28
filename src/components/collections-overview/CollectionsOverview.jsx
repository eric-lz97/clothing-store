import React from 'react'
import './collections_overview.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections && collections.map(collection => (
        <CollectionPreview key={collection.id}
          items={collection.items}
          title={collection.title} />
      ))}
    </div>
  )
}

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired
}

const mapStateToProps = () => createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps, null)(CollectionsOverview)
