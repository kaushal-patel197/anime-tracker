import { styled } from 'styled-components'

const Card = styled.div`
  border: 0.1rem solid #ddd;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  width: 20rem;
`

const Image = styled.img`
  max-width: 10rem;
  height: auto;
`

const Title = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`

const Description = styled.p`
  font-size: 1.6rem;
`

const AnimeCard = (props) => {
  const { anime } = props
  return (
    <>
      <Card>
        <Title>{anime.title}</Title>
        <Image src={anime.images.webp.image_url} alt={anime.title} />
        <Description>{anime.synopsis}</Description>
      </Card>
    </>
  )
}

export default AnimeCard
