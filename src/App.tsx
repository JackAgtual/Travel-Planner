import { useState } from 'react'
import Header from './components/Header'
import PalceForm from './components/PalceForm'
import { PlaceResponse } from './types/backend'

function App() {
  const [restaurants, setRestaurants] = useState<PlaceResponse[]>([])

  return (
    <>
      <Header />
      <PalceForm setRestaurants={setRestaurants} />
    </>
  )
}

export default App
