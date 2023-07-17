import React, { useState } from 'react'
import { PlaceResponse, queryParamToDisplayType } from '../types/place'

type PlaceFormProps = {
  setPlaces: React.Dispatch<React.SetStateAction<PlaceResponse>>
}

function PalceForm({ setPlaces }: PlaceFormProps) {
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

    let typesQueryParam = ''
    selectedTypes.forEach((type) => (typesQueryParam += `&types[]=${type}`))

    const apiRes = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/place?${typesQueryParam}&destination=${destination}`
    )
    const apiResData: PlaceResponse = await apiRes.json()
    setPlaces(apiResData)
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
            className=" ml-1 rounded-md border-2 border-solid px-2"
            type="text"
            placeholder="San Francisco"
            value={destination}
            required
            onChange={(e) => handleDestinationChange(e)}
          ></input>
        </label>
        <fieldset className="flex flex-wrap justify-center gap-3 border p-2">
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
        <button type="submit" className="rounded-md border-2">
          Search
        </button>
      </form>
    </div>
  )
}

export default PalceForm
