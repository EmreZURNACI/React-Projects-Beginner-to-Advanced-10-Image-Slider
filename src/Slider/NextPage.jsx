import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { nextImage } from '../Store/ImageSlice'
import { useSelector } from 'react-redux'
function NextPage() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  return (
    <>
      {Array.from(images).length !== 0 &&
        <div>
          <button onClick={() => dispatch(nextImage())} >
            <FaAngleRight className='text-5xl hover:text-blue-700 transition duration-300'></FaAngleRight>
          </button>
        </div>
      }
    </>
  )
}

export default NextPage