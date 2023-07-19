import WeatherCard from './WeatherCard'
import { ForecastResponse } from '../types/weather'

const weatherData: ForecastResponse = [
  {
    minTemp: 69.12,
    maxTemp: 76.82,
    displayDate: '2023-07-19',
    icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    description: 'Clear',
  },
  {
    minTemp: 71.01,
    maxTemp: 78.19,
    displayDate: '2023-07-20',
    icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    description: 'Clear',
  },
  {
    minTemp: 70.18,
    maxTemp: 78.01,
    displayDate: '2023-07-21',
    icon: 'https://openweathermap.org/img/wn/04d@2x.png',
    description: 'Clouds',
  },
  {
    minTemp: 70.27,
    maxTemp: 77.32,
    displayDate: '2023-07-22',
    icon: 'https://openweathermap.org/img/wn/04d@2x.png',
    description: 'Clouds',
  },
  {
    minTemp: 71.64,
    maxTemp: 77.22,
    displayDate: '2023-07-23',
    icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    description: 'Clear',
  },
]

function Weather() {
  return (
    <>
      <h1 className="text-center text-3xl">Weather</h1>
      <div className="space-y-4">
        {weatherData.map((weather) => {
          return <WeatherCard key={weather.displayDate} weather={weather} />
        })}
      </div>
    </>
  )
}

export default Weather
