import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { previosImage } from '../Store/ImageSlice'
import { useSelector } from 'react-redux'
function PreviousPage() {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.images);
    return (
        <>
            {Array.from(images).length !== 0 &&
                <div>
                    <button onClick={() => dispatch(previosImage())}>
                        <FaAngleLeft className='text-5xl hover:text-blue-700 transition duration-300'></FaAngleLeft>
                    </button>
                </div>
            }
        </>
    )
}

export default PreviousPage