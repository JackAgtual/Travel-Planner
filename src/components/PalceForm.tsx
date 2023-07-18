import React, { useState } from 'react'
import { Coordinates, PlaceResponse, queryParamToDisplayType } from '../types/place'
import PlaceServices from '../services/placeServices'

type PlaceFormProps = {
  setPlaces: React.Dispatch<React.SetStateAction<PlaceResponse>>
  setMapCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>
}

const placeServices = PlaceServices()

function PalceForm({ setPlaces, setMapCoordinates }: PlaceFormProps) {
  const [destination, setDestination] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set([]))

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value)
  }

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    setSelectedTypes((prevSelectedTypes) => {
      const updatedSelection = new Set(prevSelectedTypes)
      if (checked) {
        updatedSelection.add(value)
      } else {
        updatedSelection.delete(value)
      }
      return updatedSelection
    })
  }

  const handleDestinationFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const placeData = await placeServices.fetchPlaceData(selectedTypes, destination)
    setPlaces(placeData)

    const geopointData = await placeServices.fetchGeopointData(destination)
    setMapCoordinates({ lat: geopointData.lat, lon: geopointData.lon })
  }

  return (
    <div className="m-2 flex flex-col items-center rounded-md border-2 px-2 py-4">
      <h1 className="text-xl font-bold">Where would you like to go?</h1>
      <form
        onSubmit={(e) => handleDestinationFormSubmit(e)}
        className="mx-3 mt-4 flex flex-col items-center space-y-3"
      >
        <label>
          Destination:
          <input
            className=" ml-1 rounded-md border-2 border-solid px-2"
            type="text"
            placeholder="San Francisco"
            value={destination}
            required
            onChange={(e) => handleDestinationChange(e)}
          ></input>
        </label>
        <fieldset className="flex flex-wrap justify-center gap-3 rounded-md border p-2">
          <legend>Choose what types of places you'd like to see:</legend>
          {Object.entries(queryParamToDisplayType).map((entry) => {
            const [queryParam, displayName] = entry
            return (
              <label key={queryParam} className="flex gap-x-1">
                <input
                  type="checkbox"
                  name={displayName}
                  value={queryParam}
                  onChange={handleCheckboxToggle}
                />
                {displayName}
              </label>
            )
          })}
        </fieldset>
        <button type="submit" className="rounded-md bg-slate-200 px-10 py-2">
          Search
        </button>
      </form>
    </div>
  )
}

export default PalceForm
