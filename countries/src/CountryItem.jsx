import { useState } from 'react'
import Country from './Country'

const CountryItem = ({ country }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <li key={country.name.common}>
      {country.name.common}{' '}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? 'hide' : 'show'}
      </button>
      {isShow && (
        <div style={{ border: '2px solid magenta' }}>
          <Country country={country} />
        </div>
      )}
    </li>
  )
}

export default CountryItem
