import SearchBar from './components/SearchBar'
import AnimeList from './components/AnimeList'

function App() {
  const onSearch = (e) => {
    console.log(e)
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <AnimeList />
    </>
  )
}

export default App
