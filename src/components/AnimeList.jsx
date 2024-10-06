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
  const { searchTerm } = props

  const { data, isLoading, isError } = useQuery({
    queryKey: ['anime', searchTerm],
    queryFn: () => fetchAnime(searchTerm),
    enabled: !!searchTerm,
  })

  if (isLoading || isError) {
    return
  }

  return (
    <>
      <ListContainer>
        {data.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </ListContainer>
    </>
  )
}

export default AnimeList
