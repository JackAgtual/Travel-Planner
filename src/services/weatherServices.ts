import { Coordinates } from '../types/place'
import { ForecastResponse } from '../types/weather'

export default function WeatherServices() {
  const fetchForecastData = async (
    coordinates: Coordinates,
  ): Promise<ForecastResponse> => {
    const apiRes = await fetch(
      `${import.meta.env.VITE_BASE_URL}/weather/forecast?lat=${coordinates?.lat}&lon=${
        coordinates?.lon
      }`,
    )

    return apiRes.json()
  }

  return {
    fetchForecastData,
  }
}
