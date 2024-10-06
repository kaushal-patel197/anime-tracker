const AnimeCard = (props) => {
  const { anime } = props
  return (
    <>
      <div>
        <h1>{anime.name}</h1>
        <img src={anime.image} />
        <p>{anime.description}</p>
      </div>
    </>
  )
}

export default AnimeCard
