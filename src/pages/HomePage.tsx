// HalamanUtama.tsx
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import GifList from '../components/GifList'
import { getIronManGifs, searchGifs, Gif } from '../api'

enum View {
  HOME,
  IRON_MAN_GIPHY,
  SEARCH_GIPHY,
}

const HomePage: React.FC = () => {
  const [view, setView] = useState<View>(View.HOME)
  const [gifs, setGifs] = useState<Gif[]>([])
  const [title, setTitle] = useState<string>('')

  const handleIronManGiphyClick = async () => {
    setView(View.IRON_MAN_GIPHY)
    const ironManGifs = await getIronManGifs()
    setGifs(ironManGifs)
    setTitle('Iron man giphy')
  }

  const handleSearchGiphyClick = () => {
    setView(View.SEARCH_GIPHY)
    setTitle('Search your giphy')
  }

  const handleSearch = async (query: string) => {
    const searchResult = await searchGifs(query)
    setGifs(searchResult)
  }

  return (
    <div className='min-h-screen' style={{ paddingTop: '110px' }}>
      {view === View.HOME && (
        <>
          <div className='flex flex-col items-center'>
            <h1 className='uppercase tracking-tighter font-bold text-5xl mb-20'>
              Welcome to your giphy
            </h1>
            <div className='flex justify-center items-center gap-4'>
              <img
                src='https://res.cloudinary.com/delclboja/image/upload/v1690626787/giphy_kadq3q.png'
                alt=''
                className='w-28'
              />
              <h1 className='uppercase text-8xl font-black tracking-tighter'>
                Giphy
              </h1>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 mt-20'>
            <button
              className='uppercase text-blue-800 border-b border-dashed border-blue-800'
              onClick={handleIronManGiphyClick}
            >
              Iron Man Giphy
            </button>
            <button
              className='uppercase text-blue-800 border-b border-dashed border-blue-800'
              onClick={handleSearchGiphyClick}
            >
              Search Your Giphy
            </button>
          </div>
        </>
      )}

      {view !== View.HOME && (
        <h1 className='uppercase font-bold text-3xl text-center'>{title}</h1>
      )}
      {view === View.SEARCH_GIPHY && <SearchBar onSearch={handleSearch} />}
      {view === View.SEARCH_GIPHY && <GifList gifs={gifs} />}
      {view === View.IRON_MAN_GIPHY && <GifList gifs={gifs} />}
    </div>
  )
}

export default HomePage
