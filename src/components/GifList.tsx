import React from 'react'
import GifItem from './GifItem'
import Gif from '../types/Gif'

interface GifListProps {
  gifs: Gif[]
  message: string
}

const GifList: React.FC<GifListProps> = ({ gifs, message }) => {
  return (
    <div className='responsive-gap flex flex-wrap mt-6 sm:mt-12 md:mt-24'>
      {!message ? (
        gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)
      ) : (
        <h2 className='capitalize text-red-500 text-4xl mx-auto'>{message}</h2>
      )}
    </div>
  )
}

export default GifList
