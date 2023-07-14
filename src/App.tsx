import { useState } from 'react'
import Header from './components/Header'
import PalceForm from './components/PalceForm'
import { PlaceResponse } from './types/place'
import PlacesGrid from './components/PlacesGrid'

function App() {
  const [places, setPlaces] = useState<PlaceResponse>([])

  return (
    <>
      <Header />
      <PalceForm setPlaces={setPlaces} />
      {places.length > 0 && (
        <PlacesGrid placeType="Restaurants" places={places[0].data} />
      )}
    </>
  )
}

export default App
