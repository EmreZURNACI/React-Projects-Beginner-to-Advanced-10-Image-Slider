import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { getImages } from "./Store/ImageSlice";
import toast, { Toaster } from 'react-hot-toast';
import { spesificImage } from './Store/ImageSlice';
function GetImages() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const fetchRequest = async (e) => {
    e.preventDefault();
    if (query.trim() === null || query.trim() === "" || query.trim() === undefined) {
      toast("Input area is not be empty!", {
        icon: "⚠️"
      });
    }
    else {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=agh7CslZQkGvNYxtZaVSJj5eP4mtZIka6q5htkMLV8U`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      if (Array.from(result).length !== 0) {
        dispatch(getImages(result));
        dispatch(spesificImage(0));
      }
      else {
        toast.error("Try writing something else!")
      }
    }
  };
  return (
    <div className="absolute top-0 h-20 bg-black left-0 w-full">
      <Toaster position='top-right' />
      <form onSubmit={(e) => fetchRequest(e)} className='container h-full mx-auto flex items-center justify-center'>
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" autoComplete='off' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Try to write something...' />
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default GetImages