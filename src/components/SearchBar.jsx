import { useEffect, useState } from 'react'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search Anime List" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchBar
