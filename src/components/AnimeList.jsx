import AnimeCard from './AnimeCard'

const AnimeList = (props) => {
  const animeList = [
    {
      id: 1,
      name: 'Inuyasha',
      image:
        'https://image.tmdb.org/t/p/original/m7gGPZCguDU7bmVqQ2ZiSo7b9Xc.jpg',
      description:
        'InuYasha is a shōnen action adventure romantic comedy, with elements from the horror genre.',
    },
  ]

  return (
    <>
      <div>
        {animeList.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </div>
    </>
  )
}

export default AnimeList
