import { useState, useRef } from 'react'
import { PlaceData, SelectedPlaces } from '../types/place'
import { PiHeartDuotone } from 'react-icons/pi'

type PlaceCardProps = {
  place: PlaceData
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function PlaceCard({ place, setSelectedPlaces }: PlaceCardProps) {
  const [addedToMap, setAddedToMap] = useState(false)
  const popupRef = useRef<HTMLDialogElement>(null)

  const getRatingString = (place: PlaceData) => {
    if (place.numRatings === 0) {
      return 'No ratings'
    }

    return `${place.rating} / 5 (${place.numRatings} ${
      place.numRatings === 1 ? 'rating' : 'ratings'
    })`
  }

  const handleCardClick = () => {
    popupRef.current?.showModal()
  }

  const handleAddToMapClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setAddedToMap(true)
    setSelectedPlaces((prevPlaces) => {
      const updatedSelectedPlaces = new Set(prevPlaces)
      updatedSelectedPlaces.add(place)
      return updatedSelectedPlaces
    })
  }

  const handleRemoveFromMapClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    setAddedToMap(false)
    setSelectedPlaces((prevPlaces) => {
      return new Set([...prevPlaces].filter((aPlace) => aPlace.name !== place.name))
    })
  }

  return (
    <div
      className="mx-auto box-border flex max-w-sm flex-col justify-center rounded-md border-2 text-lg"
      onClick={handleCardClick}
    >
      <dialog ref={popupRef}>{place.name}</dialog>
      <div className="relative">
        <img
          src={place.photoUrl}
          className="mx-auto aspect-video w-full rounded-md object-none"
        />
        {addedToMap ? (
          <button
            className="absolute right-3 top-3 rounded-full bg-slate-50"
            onClick={handleRemoveFromMapClick}
          >
            <PiHeartDuotone className="h-10 w-10 p-1 text-red-500 hover:text-black" />
          </button>
        ) : (
          <button
            className="absolute right-3 top-3 rounded-full bg-slate-50"
            onClick={handleAddToMapClick}
          >
            <PiHeartDuotone className="h-10 w-10 rounded-full p-1 text-black hover:text-red-500 hover:opacity-100" />
          </button>
        )}
      </div>
      <h1 className="mx-auto max-w-xs truncate px-4 text-center text-xl">{place.name}</h1>
      <p className="text-center">{getRatingString(place)}</p>
    </div>
  )
}

export default PlaceCard
