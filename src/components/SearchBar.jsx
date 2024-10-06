import { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 1rem;
  width: 30rem;
  margin-right: 1rem;
`

const Button = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: 0.2rem solid #007bff;
  cursor: pointer;
`

const SearchBar = (props) => {
  const { onSearch } = props
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Search Anime List" onChange={handleChange} />
        <Button type="submit">Search</Button>
      </form>
    </>
  )
}

export default SearchBar
