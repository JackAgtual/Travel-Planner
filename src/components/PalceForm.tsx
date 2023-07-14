import React, { useState } from 'react'
import { PlaceResponse } from '../types/place'

type PlaceFormProps = {
  setPlaces: React.Dispatch<React.SetStateAction<PlaceResponse>>
}

function PalceForm({ setPlaces }: PlaceFormProps) {
  const [destination, setDestination] = useState('')

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value)
  }

  const handleDestinationFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const apiRes = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/place?types[]=restaurant&destination=${destination}`
    )
    const data = await apiRes.json()

    setPlaces(data)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold">Where would you like to go?</h1>
      <form
        onSubmit={(e) => handleDestinationFormSubmit(e)}
        className="flex flex-col justify-center"
      >
        <label>
          Destination:
          <input
            className=" px-2 ml-1 border-2 border-solid rounded-md"
            type="text"
            placeholder="San Francisco"
            value={destination}
            onChange={(e) => handleDestinationChange(e)}
          ></input>
        </label>
        <button type="submit" className="border-2 rounded-md">
          Search
        </button>
      </form>
    </div>
  )
}

export default PalceForm
