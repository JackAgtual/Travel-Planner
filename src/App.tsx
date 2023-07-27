import { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import PalceForm from './components/PlaceForm'
import {
  Coordinates,
  PlaceResponse,
  queryParamToDisplayType,
  SelectedPlaces,
  Destination,
} from './types/place'
import PlacesGrid from './components/PlacesGrid'
import Weather from './components/Weather'
import usePlaces from './hooks/usePlaces'
import useGeoPoint from './hooks/useGeoPoint'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>(undefined)
  const [destination, setDestination] = useState<Destination>('')
  const [selectedTypes, setSelectedTypes] = useState<SelectedPlaces>(new Set([]))
  const [, placesLoading, placesError, fetchPlaces] = usePlaces(
    selectedTypes,
    destination,
  )
  const [, geopointLoading, geopointError, fetchGeopoint] = useGeoPoint(destination)

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
        <Map coordinates={mapCoordinates} />
        <div className="space-y-10">
          {places.map((place) => {
            const name =
              queryParamToDisplayType[place.type as keyof typeof queryParamToDisplayType]
            return <PlacesGrid key={place.type} placeType={name} places={place.data} />
          })}
        </div>
        <Weather coordinates={mapCoordinates} />
      </div>
    </>
  )
}

export default App
