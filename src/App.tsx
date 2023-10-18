import { useState } from 'react'
import Header from './components/Header'
import PlaceForm from './components/PlaceForm'
import DestinationDisplay from './components/DestinationDisplay'
import {
  Coordinates,
  PlaceResponse,
  SelectedPlaceTypes,
  Destination,
  SelectedPlaces,
} from './types/place'
import usePlaceSearch from './hooks/usePlaceSearch'
import useGeoPoint from './hooks/useGeoPoint'
import { useLoadScript } from '@react-google-maps/api'
import { Library } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const GOOGLE_LIBRARIES: Library[] = ['places']

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>(undefined)
  const [destination, setDestination] = useState<Destination>('')
  const [selectedTypes, setSelectedTypes] = useState<SelectedPlaceTypes>(new Set([]))
  const [, placesLoading, placesError, fetchPlaces] = usePlaceSearch(
    selectedTypes,
    destination,
  )
  const [, geopointLoading, geopointError, fetchGeopoint] = useGeoPoint(destination)
  const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlaces>(new Set())
  const { isLoaded: googleMapsIsLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_LIBRARIES,
  })

  const loadingData = placesLoading || geopointLoading
  const destinationError = placesError || geopointError

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl px-4">
        <PlaceForm
          isLoaded={googleMapsIsLoaded}
          setDestination={setDestination}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          setPlaces={setPlaces}
          setMapCoordinates={setMapCoordinates}
          fetchPlaces={fetchPlaces}
          fetchGeopoint={fetchGeopoint}
        />
        <DestinationDisplay
          loadingDestination={loadingData}
          destinationError={destinationError}
          mapCoordinates={mapCoordinates}
          googleMapsIsLoaded={googleMapsIsLoaded}
          places={places}
          selectedPlaces={selectedPlaces}
          setSelectedPlaces={setSelectedPlaces}
        />
      </div>
    </>
  )
}

export default App
