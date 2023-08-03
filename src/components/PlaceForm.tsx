import { useState } from 'react'
import {
  Coordinates,
  PlaceResponse,
  GeopointResponse,
  queryParamToDisplayType,
  SelectedPlaceTypes,
  Destination,
} from '../types/place'
import { Autocomplete } from '@react-google-maps/api'

type PlaceFormProps = {
  isLoaded: boolean
  setDestination: React.Dispatch<React.SetStateAction<string>>
  setSelectedTypes: React.Dispatch<React.SetStateAction<SelectedPlaceTypes>>
  setPlaces: React.Dispatch<React.SetStateAction<PlaceResponse>>
  setMapCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>
  fetchPlaces: () => Promise<void | PlaceResponse> | undefined
  fetchGeopoint: () => Promise<void | GeopointResponse> | undefined
}

function PalceForm({
  isLoaded,
  setDestination,
  setSelectedTypes,
  setPlaces,
  setMapCoordinates,
  fetchPlaces,
  fetchGeopoint,
}: PlaceFormProps) {
  if (!isLoaded) return <p>Loading ...</p>

  const [autocomplete, setAutocomplete] = useState<
    google.maps.places.Autocomplete | undefined
  >(undefined)
  const [searchText, setSearchText] = useState('')

  const handlePlaceChange = () => {
    const destination = autocomplete?.getPlace().formatted_address || ''
    setSearchText(destination)
    setDestination(destination)
  }

  const handleAutocompleteLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete)
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
    const placeData = await fetchPlaces()
    if (placeData) {
      setPlaces(placeData)
    }

    const geopointData = await fetchGeopoint()
    if (geopointData) {
      setMapCoordinates({ lat: geopointData.lat, lon: geopointData.lon })
    }
  }

  return (
    <div className="my-4 flex flex-col items-center rounded-md border-2 px-2 py-4">
      <h1 className="text-xl font-bold">Where would you like to go?</h1>
      <form
        onSubmit={(e) => handleDestinationFormSubmit(e)}
        className="mx-3 mt-4 flex flex-col items-center space-y-3"
      >
        <label className="md:flex md:items-center">
          Destination:
          <Autocomplete
            onPlaceChanged={handlePlaceChange}
            onLoad={handleAutocompleteLoad}
          >
            <input
              className="rounded-md border-2 border-solid px-2 py-1 md:ml-1"
              type="text"
              placeholder="Enter a destination"
              value={searchText}
              required
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Autocomplete>
        </label>
        <fieldset className="flex flex-wrap justify-center gap-3 rounded-md border p-2">
          <legend>Choose what types of places you'd like to see:</legend>
          {Object.entries(queryParamToDisplayType).map((entry) => {
            const [queryParam, displayName] = entry
            return (
              <label key={queryParam} className="flex cursor-pointer gap-x-1">
                <input
                  className="cursor-pointer"
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
        <button
          type="submit"
          className="rounded-md bg-slate-200 px-10 py-2 transition hover:bg-slate-100"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default PalceForm
