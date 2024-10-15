import SearchBar from './components/SearchBar'
import AnimeList from './components/AnimeList'
import { useState } from 'react'
import Watchlist from './components/Watchlist'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [watchlist, setWatchlist] = useState([])

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  const handleWatchlist = (anime) => {
    if (!watchlist.find((item) => item.mal_id === anime.mal_id)) {
      setWatchlist([...watchlist, anime])
    }
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Watchlist watchlist={watchlist} />
      {searchTerm && (
        <AnimeList searchTerm={searchTerm} handleWatchlist={handleWatchlist} />
      )}
    </>
  )
}

export default App
