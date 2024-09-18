import axios from 'axios'
import { useEffect, useState } from 'react'
import Countries from './Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => setCountries(response.data))
  }, [])

  return (
    <div>
      find countries{' '}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && <Countries countries={filteredCountries} />}
    </div>
  )
}

export default App
