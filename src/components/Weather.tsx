import { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import { ForecastResponse } from '../types/weather'
import { Coordinates } from '../types/place'
import WeatherServices from '../services/weatherServices'

type WeatherProps = {
  coordinates: Coordinates
}

const weatherServices = WeatherServices()

function Weather({ coordinates }: WeatherProps) {
  if (coordinates === undefined) return

  const [weatherData, setWeatherData] = useState<ForecastResponse>([])

  useEffect(() => {
    weatherServices.fetchForecastData(coordinates).then((data) => {
      setWeatherData(data)
    })
  }, [coordinates.lat, coordinates.lon])
  return (
    <>
      <h1 className="mb-4 text-center text-3xl">Weather</h1>
      <div className="space-y-4 md:flex md:justify-around md:space-x-4 md:space-y-0">
        {weatherData.map((weather) => {
          return <WeatherCard key={weather.displayDate} weather={weather} />
        })}
      </div>
    </>
  )
}

export default Weather
