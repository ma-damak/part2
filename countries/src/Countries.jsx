import Country from './Country'
import CountryItem from './CountryItem'

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <p style={{ background: 'blue' }}>
        Too many matches, sepcify another filter
      </p>
    )
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </ul>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    return <Country country={country} />
  } else {
    return (
      <p style={{ background: 'red' }}>No country is found with that filter</p>
    )
  }
}

export default Countries
