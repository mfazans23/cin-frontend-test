// GifList.tsx
import React from 'react'
import GifItem from './GifItem'
import { Gif } from '../api'

interface GifListProps {
  gifs: Gif[]
}

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className='flex flex-wrap' style={{ gap: '6vw', margin: '75px 5vw' }}>
      {gifs.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  )
}

export default GifList
