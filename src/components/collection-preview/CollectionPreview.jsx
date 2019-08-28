import React from 'react'
import './collection_preview.scss'
import PropTypes from 'prop-types'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((item, idx) => idx < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item} />
            })
        }
      </div>
    </div>
  )
}
PreviewCollection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default PreviewCollection
