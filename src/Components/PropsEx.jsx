import React from 'react'

function PropsEx({data,handleClick,index}) {

    const {image,name,artist,added}=data;

  return (
    <div className='flex gap-4 w-80 bg-zinc-100 p-4 rounded-md pb-12 relative mt-10'>
      <div className='w-28 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="artist-image" />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>

      </div>
      <button onClick={()=>handleClick(index)} className={`px-2 py-2 mb-1 w-1/ ${added===false?"bg-orange-500":"bg-teal-500"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y[50%] text-white text-xs rounded-full`}>{added===false?"Add To Favourites":"Added"}</button>
    </div>
  )
}

export default PropsEx
