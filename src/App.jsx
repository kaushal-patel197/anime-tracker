import dummyAnimeList from './data/anime'
import SearchBar from './components/SearchBar'
import AnimeList from './components/AnimeList'
import { useState } from 'react'

function App() {
  const [animeList, setAnimeList] = useState(dummyAnimeList)

  const onSearch = (searchTerm) => {
    console.log(searchTerm)
    setAnimeList(animeList.filter((anime) => anime.name === searchTerm))
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <AnimeList animeList={animeList} />
    </>
  )
}

export default App
