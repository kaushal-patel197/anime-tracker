import { styled } from 'styled-components'
import AnimeCard from './AnimeCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const fetchAnime = async (searchTerm) => {
  const {
    data: { data },
  } = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)

  return data
}

const AnimeList = (props) => {
  const { searchTerm, handleWatchlist } = props

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['anime', searchTerm],
    queryFn: () => fetchAnime(searchTerm),
    enabled: !!searchTerm,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>
  }

  return (
    <>
      <ListContainer>
        {data.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            handleWatchlist={handleWatchlist}
          />
        ))}
      </ListContainer>
    </>
  )
}

export default AnimeList
