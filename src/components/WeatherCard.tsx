import { WeatherData } from '../types/weather'

type WeatherCardProps = {
  weather: WeatherData
}

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="rounded-md border">
      <h3 className="text-center text-lg">{weather.displayDate}</h3>
      <img src={weather.icon} alt="Weather icon" className="mx-auto" />
      <div className="flex justify-around">
        <p>{weather.minTemp}&deg;</p>
        <p>{weather.maxTemp}&deg;</p>
      </div>
    </div>
  )
}

export default WeatherCard
