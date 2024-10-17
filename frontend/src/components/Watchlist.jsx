import AnimeCard from './AnimeCard'
import { styled } from 'styled-components'
import { GET_WATCHLIST } from '../graphql/watchlist'
import { useQuery } from '@tanstack/react-query'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const fetchWatchlist = async () => {
  const { data } = await client.query({
    query: GET_WATCHLIST,
  })
  return data.getAllWatchlist
}

const Watchlist = (props) => {
  const {
    watchlist,
    handleRemoveFromWatchlist,
    handleIncrement,
    handleDecrement,
  } = props

  const { data } = useQuery({
    queryKey: ['watchlist'],
    queryFn: () => fetchWatchlist(),
  })

  return (
    <>
      <h2>Watchlist</h2>
      {data?.map((a) => console.log(a))}
      {watchlist.length === 0 ? (
        <p>No anime added to watchlist</p>
      ) : (
        <ListContainer>
          {watchlist.map((anime) => (
            <div key={anime.mal_id}>
              <AnimeCard anime={anime} />
              <p>Episodes Watched: {anime.episodeCount}</p>
              <button onClick={() => handleIncrement(anime.mal_id)}>+</button>
              <button onClick={() => handleDecrement(anime.mal_id)}>-</button>
              <button onClick={() => handleRemoveFromWatchlist(anime.mal_id)}>
                Remove from Watchlist
              </button>
            </div>
          ))}
        </ListContainer>
      )}
    </>
  )
}

export default Watchlist
