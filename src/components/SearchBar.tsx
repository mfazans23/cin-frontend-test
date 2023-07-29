// SearchBar.tsx
import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <h1 className='text-gray-800 uppercase font-bold text-2xl text-center pb-2 sm:pb-4 md:pb-6 sm:text-4xl'>
        Search Your Giphy
      </h1>
      <input
        className='p-2 border border-gray-400 outline-none rounded w-4/5 sm:w-3/5 md:w-2/5'
        type='text'
        placeholder='Search Your Giphy'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
