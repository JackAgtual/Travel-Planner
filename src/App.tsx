import { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import PalceForm from './components/PlaceForm'
import {
  Coordinates,
  PlaceResponse,
  queryParamToDisplayType,
  SelectedPlaceTypes,
  Destination,
  SelectedPlaces,
} from './types/place'
import PlacesGrid from './components/PlacesGrid'
import Weather from './components/Weather'
import usePlaces from './hooks/usePlaces'
import useGeoPoint from './hooks/useGeoPoint'
import { AiOutlineLoading } from 'react-icons/ai'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>(undefined)
  const [destination, setDestination] = useState<Destination>('')
  const [selectedTypes, setSelectedTypes] = useState<SelectedPlaceTypes>(new Set([]))
  const [, placesLoading, placesError, fetchPlaces] = usePlaces(
    selectedTypes,
    destination,
  )
  const [, geopointLoading, geopointError, fetchGeopoint] = useGeoPoint(destination)
  const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlaces>(new Set())

  const loadingData = placesLoading || geopointLoading

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl px-4">
        <PalceForm
          destination={destination}
          setDestination={setDestination}
          setSelectedTypes={setSelectedTypes}
          setPlaces={setPlaces}
          setMapCoordinates={setMapCoordinates}
          fetchPlaces={fetchPlaces}
          fetchGeopoint={fetchGeopoint}
        />

        {loadingData ? (
          <div className="flex items-center justify-center space-x-3">
            <AiOutlineLoading className="animate-spin" />
            <p className="text-center text-xl">Loading Data ...</p>
          </div>
        ) : (
          <div className="mb-10 space-y-4">
            <Map coordinates={mapCoordinates} selectedPlaces={selectedPlaces} />
            <div className="space-y-10">
              {places.map((place) => {
                const name =
                  queryParamToDisplayType[
                    place.type as keyof typeof queryParamToDisplayType
                  ]
                return (
                  <PlacesGrid
                    key={place.type}
                    placeType={name}
                    places={place.data}
                    setSelectedPlaces={setSelectedPlaces}
                  />
                )
              })}
            </div>
            <Weather coordinates={mapCoordinates} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
