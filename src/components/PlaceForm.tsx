import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notifyLoading, timeBeforeNotification } from '../utils/toast'
import useTimer from '../hooks/useTimer'
import {
  Coordinates,
  PlaceResponse,
  GeopointResponse,
  queryParamToDisplayType,
  SelectedPlaceTypes,
} from '../types/place'
import { Autocomplete } from '@react-google-maps/api'
import { twMerge } from 'tailwind-merge'
import { AiOutlineCar, AiOutlineCamera } from 'react-icons/ai'
import { BiRestaurant, BiBeer, BiHotel } from 'react-icons/bi'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { MdLocalAirport, MdOutlineBakeryDining, MdOutlineMuseum } from 'react-icons/md'
import { GrStatusUnknown } from 'react-icons/gr'
import { IconType } from 'react-icons'

type PlaceFormProps = {
  isLoaded: boolean
  setDestination: React.Dispatch<React.SetStateAction<string>>
  selectedTypes: SelectedPlaceTypes
  setSelectedTypes: React.Dispatch<React.SetStateAction<SelectedPlaceTypes>>
  setPlaces: React.Dispatch<React.SetStateAction<PlaceResponse>>
  setMapCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>
  fetchPlaces: () => Promise<void | PlaceResponse> | undefined
  fetchGeopoint: () => Promise<void | GeopointResponse> | undefined
}

const placeTypeToIcon: { [key: string]: IconType } = {
  restaurant: BiRestaurant,
  bar: BiBeer,
  airport: MdLocalAirport,
  art_gallery: BiRestaurant,
  bakery: MdOutlineBakeryDining,
  car_rental: AiOutlineCar,
  lodging: BiHotel,
  museum: MdOutlineMuseum,
  night_club: BsMusicNoteBeamed,
  tourist_attraction: AiOutlineCamera,
}

function PlaceForm({
  isLoaded,
  setDestination,
  selectedTypes,
  setSelectedTypes,
  setPlaces,
  setMapCoordinates,
  fetchPlaces,
  fetchGeopoint,
}: PlaceFormProps) {
  const noPlaceTypeSelected = selectedTypes.size === 0

  const [autocomplete, setAutocomplete] = useState<
    google.maps.places.Autocomplete | undefined
  >(undefined)
  const [searchText, setSearchText] = useState('')
  const [startTimer, stopTimer] = useTimer(timeBeforeNotification, notifyLoading)

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (noPlaceTypeSelected) return

    startTimer()

    const placeData = await fetchPlaces()
    if (placeData) {
      setPlaces(placeData)
    }

    const geopointData = await fetchGeopoint()
    if (geopointData) {
      setMapCoordinates({ lat: geopointData.lat, lon: geopointData.lon })
    }

    stopTimer()
  }

  if (!isLoaded) return <p>Loading ...</p>

  return (
    <div className="my-4 flex flex-col items-center rounded-md border-2 px-2 py-4">
      <ToastContainer />
      <h1 className="text-xl font-bold">Where would you like to go?</h1>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
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
        <fieldset className="flex flex-wrap justify-center gap-2">
          <legend>Choose what types of places you'd like to see:</legend>
          {Object.entries(queryParamToDisplayType).map((entry) => {
            const [queryParam, displayName] = entry
            const Icon = placeTypeToIcon[queryParam] || GrStatusUnknown
            const isSelected = selectedTypes.has(queryParam)
            return (
              <label
                key={queryParam}
                className={twMerge(
                  'flex w-24 cursor-pointer flex-col items-center gap-x-1 rounded-lg border-2 p-2',
                  isSelected ? 'bg-slate-200' : '',
                )}
              >
                <input
                  className="hidden cursor-pointer"
                  type="checkbox"
                  name={displayName}
                  value={queryParam}
                  onChange={handleCheckboxToggle}
                />
                <p className="h-12 text-center">{displayName}</p>
                <Icon className="h-10 w-10" />
              </label>
            )
          })}
        </fieldset>
        <button
          type="submit"
          className={twMerge(
            'rounded-md bg-slate-200 px-10 py-2 transition',
            noPlaceTypeSelected ? 'text-slate-400' : 'hover:bg-slate-100',
          )}
          disabled={noPlaceTypeSelected}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default PlaceForm
