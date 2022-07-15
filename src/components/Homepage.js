import { useState } from 'react'
import SearchBar from './SearchBar'
import ContactsList from './ContactsList'

const Homepage = () => {
  const [query, setQuery] = useState('')

  const onSearch = (text) => {
      setQuery(text)
  }

  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <ContactsList query={query} />
    </div>
  )
}

export default Homepage