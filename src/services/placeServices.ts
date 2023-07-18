import { GeopointResponse, PlaceResponse } from '../types/place'

export default function PlaceServices() {
  const fetchPlaceData = async (
    typesOfPlaces: Set<string>,
    destination: string
  ): Promise<PlaceResponse> => {
    let typesQueryParam = ''
    typesOfPlaces.forEach((type) => (typesQueryParam += `&types[]=${type}`))

    const apiRes = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/place?${typesQueryParam}&destination=${destination}`
    )
    return apiRes.json()
  }

  const fetchGeopointData = async (destination: string): Promise<GeopointResponse> => {
    const geopoint = await fetch(
      `${import.meta.env.VITE_BASE_URL}/place/geopoint?destination=${destination}`
    )
    return geopoint.json()
  }

  return {
    fetchPlaceData,
    fetchGeopointData,
  }
}
