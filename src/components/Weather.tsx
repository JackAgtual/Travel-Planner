import { useEffect } from 'react'
import WeatherCard from './WeatherCard'
import { Coordinates } from '../types/place'
import useWeather from '../hooks/useWeather'

type WeatherProps = {
  coordinates: Coordinates
}

function Weather({ coordinates }: WeatherProps) {
  if (coordinates === undefined) return

  const [weatherData, weatherLoading, , fetchWeather] = useWeather(coordinates)

  useEffect(() => {
    fetchWeather()
  }, [coordinates.lat, coordinates.lon])

  return (
    <>
      {weatherLoading ? (
        <p className="text-center text-xl">Loading weather...</p>
      ) : (
        <>
          <h1 className="mb-4 text-center text-4xl font-semibold">Weather</h1>
          <div className="space-y-4 md:flex md:justify-around md:space-x-4 md:space-y-0">
            {weatherData !== undefined &&
              weatherData.map((weather) => {
                return <WeatherCard key={weather.displayDate} weather={weather} />
              })}
          </div>
        </>
      )}
    </>
  )
}

export default Weather
