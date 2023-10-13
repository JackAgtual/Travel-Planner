import useFetch from './useFetch'
import { PlaceResponse, SelectedPlaceTypes } from '../types/place'
const BASE_URL = import.meta.env.VITE_BASE_URL

export default function usePlaceSearch(
  typesOfPlaces: SelectedPlaceTypes,
  destination: string,
) {
  const search = new URLSearchParams()
  typesOfPlaces.forEach((type) => {
    search.append('types[]', type)
  })
  search.append('destination', destination)
  const url = `${BASE_URL}/place/search?${search.toString()}`
  return useFetch<PlaceResponse>(url)
}
