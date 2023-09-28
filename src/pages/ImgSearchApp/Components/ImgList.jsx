import React from 'react'
import ImageListItem from './ImgListItem';

const ImgList = ({data}) => {
    console.log(data)
  return (
    <div>
        <div>
            {data.map((image)=>{
                return <ImageListItem key={image.id} image={image}/>
            })}
        </div>
    </div>
  )
}

export default ImgList
