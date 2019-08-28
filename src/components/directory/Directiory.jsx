import React from 'react'
import './directory.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../menu-item/MenuItem'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections && sections.map(({id, ...otherSectionProps}) => {
        return <MenuItem key={id} {...otherSectionProps} />
      })}
    </div>
  )
}

Directory.propTypes = {
  sections: PropTypes.array.isRequired
}

const mapStateToProps = () => createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps, null)(Directory)
