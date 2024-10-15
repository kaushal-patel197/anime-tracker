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

  const handleIncrement = (animeId) => {
    setWatchlist(
      watchlist.map((anime) =>
        anime.mal_id === animeId
          ? { ...anime, episodeCount: anime.episodeCount + 1 }
          : anime
      )
    )
  }

  const handleDecrement = (animeId) => {
    setWatchlist(
      watchlist.map((anime) =>
        anime.mal_id === animeId && anime.episodeCount > 0
          ? { ...anime, episodeCount: anime.episodeCount - 1 }
          : anime
      )
    )
  }

  const handleAddToWatchlist = (anime) => {
    if (!watchlist.find((item) => item.mal_id === anime.mal_id)) {
      setWatchlist([...watchlist, { ...anime, episodeCount: 0 }])
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
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
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
