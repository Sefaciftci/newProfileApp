import React from 'react'

const ImgListItem = ({image}) => {
  return (
    <div>
      <img className='imgListItem' src={image.cover_photo.urls.small}/>
    </div>
  )
}

export default ImgListItem
