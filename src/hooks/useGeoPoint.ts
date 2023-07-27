import useFetch from './useFetch'
import { GeopointResponse } from '../types/place'
const BASE_URL = import.meta.env.VITE_BASE_URL

export default function useGeoPoint(destination: string) {
  const search = new URLSearchParams()
  search.append('destination', destination)
  const url = `${BASE_URL}/place/geopoint?${search.toString()}`
  return useFetch<GeopointResponse>(url)
}
