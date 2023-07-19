export type WeatherData = {
  minTemp: number
  maxTemp: number
  displayDate: string
  icon: string
  description: string
}

export type ForecastResponse = WeatherData[]
