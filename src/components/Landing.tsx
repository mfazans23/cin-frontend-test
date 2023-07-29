import React from 'react'

interface LandingProps {
  handleIronManGiphyClick: () => void
  handleSearchGiphyClick: () => void
}

const Landing: React.FC<LandingProps> = ({
  handleIronManGiphyClick,
  handleSearchGiphyClick,
}) => {
  return (
    <div className='w-10/12 mx-auto pt-40'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='uppercase text-center tracking-tighter font-medium text-gray-600 text-3xl mb-14 sm:font-bold sm:text-5xl'>
          Welcome to your giphy
        </h1>
        <div className='flex justify-center items-center gap-4'>
          <img
            src='https://res.cloudinary.com/delclboja/image/upload/v1690626787/giphy_kadq3q.png'
            alt=''
            className='w-12 sm:w-16'
          />
          <h1 className='uppercase text-5xl sm:text-8xl font-black tracking-tighter'>
            Giphy
          </h1>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 mt-20'>
        <button
          className='uppercase text-red-600 border-b border-dashed border-red-600'
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
    </div>
  )
}

export default Landing
