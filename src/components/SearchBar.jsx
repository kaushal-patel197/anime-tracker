import { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ErrorLabel = styled.label`
  color: red;
`

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
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchTerm.trim()) {
      setErrorMessage('Please enter an Anime Title')
      return
    }

    setErrorMessage('')
    onSearch(searchTerm)
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            id="anime-search"
            type="text"
            placeholder="Search Anime List"
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </InputContainer>
        <ErrorLabel htmlFor="anime-search">{errorMessage}</ErrorLabel>
      </FormContainer>
    </>
  )
}

export default SearchBar
