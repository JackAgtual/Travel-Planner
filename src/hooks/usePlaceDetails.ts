import { PlaceDetails } from '../types/place'
import useFetch from './useFetch'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default function usePlaceDetails(placeId: string) {
  const search = new URLSearchParams()
  search.append('id', placeId)

  const url = `${BASE_URL}/place/details?${search.toString()}`
  return useFetch<PlaceDetails>(url)
}
