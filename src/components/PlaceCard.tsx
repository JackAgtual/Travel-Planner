import { useState, useRef } from 'react'
import { PlaceData, SelectedPlaces } from '../types/place'
import PlaceModal from './PlaceModal'
import FavoriteIcon from './FavoriteIcon'

type PlaceCardProps = {
  place: PlaceData
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function PlaceCard({ place, setSelectedPlaces }: PlaceCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
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
    setModalOpen(true)
    popupRef.current?.showModal()
  }

  return (
    <div
      className="mx-auto box-border flex max-w-sm flex-col justify-center rounded-md border-2 text-lg"
      onClick={handleCardClick}
    >
      <PlaceModal
        ref={popupRef}
        place={place}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <div className="relative">
        <img
          src={place.photoUrl}
          className="mx-auto aspect-video w-full rounded-md object-none"
        />
        <FavoriteIcon place={place} setSelectedPlaces={setSelectedPlaces} />
      </div>
      <h1 className="mx-auto max-w-xs truncate px-4 text-center text-xl">{place.name}</h1>
      <p className="text-center">{getRatingString(place)}</p>
    </div>
  )
}

export default PlaceCard
