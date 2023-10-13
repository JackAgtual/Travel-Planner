import { Coordinates } from '../types/place'
import { ForecastResponse } from '../types/weather'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default function WeatherServices() {
  const fetchForecastData = async (
    coordinates: Coordinates,
  ): Promise<ForecastResponse> => {
    const search = new URLSearchParams()
    search.append('lat', coordinates?.lat.toString() || '')
    search.append('lon', coordinates?.lon.toString() || '')

    const apiRes = await fetch(`${BASE_URL}/weather/forecast?${search.toString()}`)

    return apiRes.json()
  }

  return {
    fetchForecastData,
  }
}
