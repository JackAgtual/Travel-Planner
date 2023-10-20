export type PlaceData = {
  name: string
  photoUrl: string
  id: string
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

export type PlaceDetails = {
  address: {
    formatted: string | null
    googleMapsUrl: string | null
  }
  phoneNumber: string | null
  photoUrls: string[] | null
  id: string | null
  website: string | null
  businessHours: string[] | null
  reviews: {
    author: string | null
    authorUrl: string | null
    authorPhoto: string | null
    rating: number | null
    time: string | null
    text: string | null
  }[]
  description: string | null
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
