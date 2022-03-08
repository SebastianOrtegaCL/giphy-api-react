import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
    // console.log({id, title, url})
  return (
    <div className='card animate__bounceIn'>
        <img src={url} alt={title} />
        <div className='card-content'>
          <p className='card-p'> {title} </p>
        </div>
    </div>
  )
}

GifGridItem.propTypes = {}

export default GifGridItem