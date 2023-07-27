import { Coordinates } from '../types/place'
import { ForecastResponse } from '../types/weather'
import useFetch from './useFetch'
const BASE_URL = import.meta.env.VITE_BASE_URL

export default function useWeather(coordintes: Coordinates) {
  const serach = new URLSearchParams()

  if (coordintes) {
    serach.append('lat', coordintes?.lat.toString())
    serach.append('lon', coordintes?.lon.toString())
  }
  const url = `${BASE_URL}/weather/forecast?${serach.toString()}`
  return useFetch<ForecastResponse>(url)
}
