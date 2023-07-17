export type PlaceData = {
  name: string
  photoUrl: string
  rating: number
  numRatings: number
  priceLevel: number
}

export type PlaceResponse = {
  type: string
  data: PlaceData[]
}[]
