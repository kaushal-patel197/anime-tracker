import { styled } from 'styled-components'
import AnimeCard from './AnimeCard'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const AnimeList = (props) => {
  const { animeList } = props
  return (
    <>
      <ListContainer>
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </ListContainer>
    </>
  )
}

export default AnimeList
