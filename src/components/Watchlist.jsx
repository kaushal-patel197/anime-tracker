import AnimeCard from './AnimeCard'
import { styled } from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Watchlist = (props) => {
  const { watchlist, handleRemoveFromWatchlist } = props

  return (
    <>
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No anime added to watchlist</p>
      ) : (
        <ListContainer>
          {watchlist.map((anime) => (
            <div key={anime.mal_id}>
              <AnimeCard anime={anime} />
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
