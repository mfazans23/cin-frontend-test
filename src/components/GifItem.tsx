import React from 'react'
import Gif from '../types/Gif'

interface GifItemProps {
  gif: Gif
}

const GifItem: React.FC<GifItemProps> = ({ gif }) => {
  return (
    <div className='responsive-width bg-gray-200 relative border-4 border-slate-300 rounded'>
      <div className='w-full h-full'>
        <img
          src={gif.imageUrl}
          alt={gif.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='text-base text-center text-gray-800 capitalize mt-2 sm:text-lg md:text-xl'>
        {gif.title}
      </div>
    </div>
  )
}

export default GifItem
