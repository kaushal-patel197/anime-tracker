import dummyAnimeList from './data/anime'
import SearchBar from './components/SearchBar'
import AnimeList from './components/AnimeList'
import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {searchTerm && <AnimeList searchTerm={searchTerm} />}
    </>
  )
}

export default App
