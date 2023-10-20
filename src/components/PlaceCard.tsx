import { useState, useRef } from 'react'
import { PlaceData, SelectedPlaces } from '../types/place'
import Rating from './Rating'
import PlaceModal from './PlaceModal'
import FavoriteIcon from './FavoriteIcon'

type PlaceCardProps = {
  place: PlaceData
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function PlaceCard({ place, setSelectedPlaces }: PlaceCardProps) {
  const [addedToMap, setAddedToMap] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const popupRef = useRef<HTMLDialogElement>(null)

  const getRatingString = () => {
    if (place.numRatings === 0) {
      return 'No ratings'
    }

    return `${place.numRatings} ${place.numRatings === 1 ? 'rating' : 'ratings'}`
  }

  const handleCardClick = () => {
    setModalOpen(true)
  }

  return (
    <div
      className="mx-auto box-border flex max-w-sm cursor-pointer flex-col justify-center rounded-md border-2 text-lg"
      onClick={handleCardClick}
    >
      <PlaceModal
        ref={popupRef}
        place={place}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setSelectedPlaces={setSelectedPlaces}
        addedToMap={addedToMap}
        setAddedToMap={setAddedToMap}
      />
      <div className="relative">
        <img
          src={place.photoUrl}
          className="mx-auto aspect-video w-full rounded-md object-none"
        />
        <FavoriteIcon
          className="absolute right-3 top-3 rounded-full bg-slate-50"
          place={place}
          setSelectedPlaces={setSelectedPlaces}
          addedToMap={addedToMap}
          setAddedToMap={setAddedToMap}
        />
      </div>
      <h1 className="mx-auto max-w-xs truncate px-4 text-center text-xl">{place.name}</h1>
      <div className="mx-auto flex items-center space-x-2">
        <Rating rating={place.rating} />
        <p>{place.rating}</p>
        <p className="text-gray-500">{getRatingString()}</p>
      </div>
    </div>
  )
}

export default PlaceCard
