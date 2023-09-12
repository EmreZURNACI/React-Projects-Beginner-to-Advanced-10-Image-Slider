import React from 'react'
import { useSelector } from 'react-redux'
function ImageContainer() {
  const images = useSelector((state) => state.images.images)
  const index = useSelector((state) => state.images.index)
  return (
    <>
      {
        Array.from(images).length !== 0 &&
        <div className='w-[calc(50vw-200px)] h-[calc(35vw-200px)]  border-0 border-neutral-600 rounded-xl' >
          <img src={images[index].urls.regular} alt={images[index].descriptions} className='w-full h-full rounded-xl' />
        </div >
      }
    </>
  )
}

export default ImageContainer