import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import GifList from '../components/GifList'
import { getIronManGifs, searchGifs } from '../api'
import Gif from '../types/Gif'
import { View } from '../enums/View'
import Spinner from '../components/Spinner'
import Landing from '../components/Landing'

const HomePage: React.FC = () => {
  const [view, setView] = useState<View>(View.HOME)
  const [gifs, setGifs] = useState<Gif[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleIronManGiphyClick = async () => {
    setLoading(true)
    setView(View.IRON_MAN_VIEW)
    const ironManGifs = await getIronManGifs()
    setGifs(ironManGifs)
    setLoading(false)
  }

  const handleSearchGiphyClick = () => {
    setView(View.SEARCH_VIEW)
  }

  const handleSearch = async (query: string) => {
    setMessage('')
    setLoading(true)
    const searchResult = await searchGifs(query)
    setGifs(searchResult)
    setLoading(false)
    if (searchResult.length === 0) setMessage('result not found')
  }

  return (
    <div className='min-h-screen'>
      {view === View.HOME ? (
        <Landing
          handleIronManGiphyClick={handleIronManGiphyClick}
          handleSearchGiphyClick={handleSearchGiphyClick}
        />
      ) : (
        <div className='pt-12 sm:pt-20 md:pt-28'>
          {view === View.SEARCH_VIEW ? (
            <SearchBar onSearch={handleSearch} />
          ) : (
            <h1 className='text-gray-800 uppercase font-bold text-2xl text-center sm:text-4xl'>
              Iron man giphy
            </h1>
          )}
          {loading ? <Spinner /> : <GifList gifs={gifs} message={message} />}
        </div>
      )}
    </div>
  )
}

export default HomePage
