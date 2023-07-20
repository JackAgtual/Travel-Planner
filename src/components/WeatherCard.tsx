import { WeatherData } from '../types/weather'

type WeatherCardProps = {
  weather: WeatherData
}

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="border-b-2 py-3 md:rounded-md md:border-2 md:px-4">
      <h3 className="text-center text-lg font-medium">{weather.displayDate}</h3>
      <img src={weather.icon} alt="Weather icon" className="mx-auto" />
      <p className="text-center">{weather.description}</p>
      <div className="flex justify-center space-x-3">
        <p>L: {weather.minTemp}&deg;</p>
        <p>H: {weather.maxTemp}&deg;</p>
      </div>
    </div>
  )
}

export default WeatherCard
