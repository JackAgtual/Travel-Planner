import { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import PalceForm from './components/PlaceForm'
import { Coordinates, PlaceResponse, queryParamToDisplayType } from './types/place'
import PlacesGrid from './components/PlacesGrid'
import Weather from './components/Weather'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>(undefined)

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl px-4">
        <PalceForm setPlaces={setPlaces} setMapCoordinates={setMapCoordinates} />
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
