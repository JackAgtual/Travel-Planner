import { useState } from 'react'
import Header from './components/Header'
import PalceForm from './components/PalceForm'
import { PlaceResponse } from './types/backend'
import PlacesGrid from './components/PlacesGrid'

function App() {
  const [restaurants, setRestaurants] = useState<PlaceResponse[]>([])

  return (
    <>
      <Header />
      <PalceForm setRestaurants={setRestaurants} />
      {restaurants.length > 0 && (
        <PlacesGrid placeType="Restaurants" places={restaurants} />
      )}
    </>
  )
}

export default App
