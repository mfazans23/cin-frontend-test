// GifItem.tsx
import React from 'react'
import { Gif } from '../api'

interface GifItemProps {
  gif: Gif
}

const GifItem: React.FC<GifItemProps> = ({ gif }) => {
  return (
    <div
      className='bg-gray-200 relative border-8 border-gray-200 rounded'
      style={{ minWidth: '25vw', minHeight: '25vw' }}
    >
      <div className='w-full h-full'>
        <img
          src={gif.imageUrl}
          alt={gif.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='text-center text-gray-800 text-lg font-bold capitalize mt-4'>
        {gif.title}
      </div>
    </div>
  )
}

export default GifItem
