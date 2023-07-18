import { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import PalceForm from './components/PlaceForm'
import { Coordinates, PlaceResponse, queryParamToDisplayType } from './types/place'
import PlacesGrid from './components/PlacesGrid'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>({ lat: 30, lon: 30 })

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-2xl px-4">
        <PalceForm setPlaces={setPlaces} setMapCoordinates={setMapCoordinates} />
        {places.length > 0 && <Map coordinates={mapCoordinates} />}
        <div className="space-y-10">
          {places.map((place) => {
            const name =
              queryParamToDisplayType[place.type as keyof typeof queryParamToDisplayType]
            return <PlacesGrid key={place.type} placeType={name} places={place.data} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
