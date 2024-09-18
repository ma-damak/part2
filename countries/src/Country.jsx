import { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null)

  const api_key = import.meta.env.VITE_SOME_KEY

  const capital = country.capital && country.capital[0]

  useEffect(() => {
    if (capital) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
        )
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.log(error.response.data.message))
    }
  }, [capital, api_key])

  return (
    <div>
      <h2 style={{ background: 'yellow' }}>{country.name.common}</h2>
      <p>capital: {country.capital ? country.capital.join(', ') : '-'}</p>
      <p>area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weatherData && (
        <div>
          <h2>weather in {capital}</h2>
          <p>temperature: {weatherData.main.temp} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Country
