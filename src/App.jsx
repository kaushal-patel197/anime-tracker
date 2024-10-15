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

  const handleAddToWatchlist = (anime) => {
    if (!watchlist.find((item) => item.mal_id === anime.mal_id)) {
      setWatchlist([...watchlist, anime])
    }
  }

  const handleRemoveFromWatchlist = (animeId) => {
    setWatchlist(watchlist.filter((item) => item.mal_id !== animeId))
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Watchlist
        watchlist={watchlist}
        handleRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
      {searchTerm && (
        <AnimeList
          searchTerm={searchTerm}
          handleAddToWatchlist={handleAddToWatchlist}
        />
      )}
    </>
  )
}

export default App
