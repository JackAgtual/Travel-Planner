import { useState } from 'react'
import Header from './components/Header'
import PalceForm from './components/PalceForm'
import { PlaceResponse, queryParamToDisplayType } from './types/place'
import PlacesGrid from './components/PlacesGrid'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])

  return (
    <>
      <Header />
      <PalceForm setPlaces={setPlaces} />
      {places.map((place) => {
        const name =
          queryParamToDisplayType[place.type as keyof typeof queryParamToDisplayType]
        return <PlacesGrid key={place.type} placeType={name} places={place.data} />
      })}
    </>
  )
}

export default App
