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
    <form onSubmit={handleSubmit} className='text-center my-8'>
      <input
        className='p-2 border border-gray-400 outline-none rounded w-2/5'
        type='text'
        placeholder='Search Your Giphy'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
