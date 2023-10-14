import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectedPlaces, PlaceData } from '../types/place'
import { PiHeartDuotone } from 'react-icons/pi'

type FavoriteIconProps = {
  place: PlaceData
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function FavoriteIcon({ place, setSelectedPlaces }: FavoriteIconProps) {
  const [addedToMap, setAddedToMap] = useState(false)

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
    <button
      className="absolute right-3 top-3 rounded-full bg-slate-50"
      onClick={addedToMap ? handleRemoveFromMapClick : handleAddToMapClick}
    >
      <PiHeartDuotone
        className={twMerge('h-10 w-10 p-1', addedToMap ? 'text-red-500' : 'text-black')}
      />
    </button>
  )
}

export default FavoriteIcon
