import AnimeCard from './AnimeCard'

const Watchlist = (props) => {
  const { watchlist } = props

  return (
    <>
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No anime added to watchlist</p>
      ) : (
        <div>
          {watchlist.map((anime) => (
            <div key={anime.mal_id}>
              <AnimeCard anime={anime} />
              <button
                onClick={() => alert(`Removing ${anime.title} from watchlist`)}
              >
                Remove from Watchlist
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Watchlist
