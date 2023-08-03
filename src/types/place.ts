export type PlaceData = {
  name: string
  photoUrl: string
  icon: string
  rating: number
  numRatings: number
  priceLevel: number
  location: {
    lat: number
    lon: number
  }
  address: {
    line1: string
    line2: string
  }
}

export type PlaceResponse = {
  type: string
  data: PlaceData[]
}[]

export type SelectedPlaceTypes = Set<string>

export type SelectedPlaces = Set<PlaceData>

export type Destination = string

export const queryParamToDisplayType = {
  restaurant: 'Restaurants',
  bar: 'Bars',
  airport: 'Airports',
  art_gallery: 'Art Galleries',
  bakery: 'Bakeries',
  car_rental: 'Car Rentals',
  city_hall: 'City Halls',
  lodging: 'Lodging',
  museum: 'Museums',
  night_club: 'Night Clubs',
  tourist_attraction: 'Tourist Attractions',
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
