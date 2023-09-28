import React from 'react'
import ImageListItem from './ImgListItem';
import '../imgSearchApp.css';

const ImgList = ({data}) => {
    console.log(data)
  return (
    <div>
        <div className='imgSearchListDiv'>
            {data.map((image)=>{
                return <ImageListItem key={image.id} image={image}/>
            })}
        </div>
    </div>
  )
}

export default ImgList
