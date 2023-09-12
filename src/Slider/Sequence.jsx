import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {spesificImage} from '../Store/ImageSlice';
function Sequence() {
    const dispatch=useDispatch();
    const images = useSelector((state) => state.images.images);
    const imageIndex = useSelector((state) => state.images.index);
    return (
        <div className='flex justify-between items-center gap-2 mt-4'>
            {
                images.map((item, index) => (
                    <button key={index} onClick={()=>dispatch(spesificImage(index))} className={'w-8 h-2 rounded-xl '+(imageIndex===index?"bg-blue-700":"bg-slate-500")}></button>
                ))
            }
        </div>
    )
}

export default Sequence