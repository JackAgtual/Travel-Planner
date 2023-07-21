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

export const queryParamToDisplayType = {
  restaurant: 'Resturants',
  bar: 'Bars',
  airport: 'Airports',
  art_gallery: 'Art Galleries',
  bakery: 'Bakeries',
  car_rental: 'Car Rentals',
  city_hall: 'City Halls',
  lodging: 'Lodging',
  museum: 'Museums',
  night_club: 'Night Clubs',
  tourist_attraction: 'Trourrist Attractions',
}

export type GeopointResponse = {
  address: string
  locationName: string
  lat: number
  lon: number
}

export type Coordinates =
  | {
      lat: number
      lon: number
    }
  | undefined
