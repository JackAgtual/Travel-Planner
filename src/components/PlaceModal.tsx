import { useEffect, forwardRef, ForwardedRef } from 'react'
import usePlaceDetails from '../hooks/usePlaceDetails'
import { PlaceData, SelectedPlaces } from '../types/place'
import FavoriteIcon from './FavoriteIcon'

type PlaceModalProps = {
  place: PlaceData
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
  addedToMap: boolean
  setAddedToMap: React.Dispatch<React.SetStateAction<boolean>>
}

function PlaceModal(
  {
    place,
    modalOpen,
    setModalOpen,
    setSelectedPlaces,
    addedToMap,
    setAddedToMap,
  }: PlaceModalProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const [placeDetails, , , fetchDetails] = usePlaceDetails(place.id)

  const handleCardClose = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    if (!ref || typeof ref === 'function') return

    if (!modalOpen) return

    const cardElement = ref.current

    if (!cardElement) return

    cardElement.showModal()

    cardElement.addEventListener('cancel', handleCardClose)
    cardElement.addEventListener('close', handleCardClose)

    fetchDetails()

    return () => {
      cardElement.removeEventListener('cancel', handleCardClose)
      cardElement.removeEventListener('close', handleCardClose)
    }
  }, [modalOpen])

  return (
    <dialog autoFocus={false} ref={ref}>
      <div className="flex items-center justify-between gap-x-4 pb-4">
        <h1 className="text-center text-2xl">{place.name}</h1>
        <FavoriteIcon
          place={place}
          setSelectedPlaces={setSelectedPlaces}
          addedToMap={addedToMap}
          setAddedToMap={setAddedToMap}
        />
      </div>
      <a
        className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        href={placeDetails?.address.googleMapsUrl}
        target="_blank"
      >
        {placeDetails?.address.formatted}
      </a>
      <p>{placeDetails?.phoneNumber}</p>
      <a
        className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        href={placeDetails?.website}
        target="_blank"
      >
        Visit their website
      </a>
      <h2>Hours:</h2>
      <ul>
        {placeDetails?.businessHours.map((hours, idx) => {
          return <li key={idx}>{hours}</li>
        })}
      </ul>
    </dialog>
  )
}

export default forwardRef(PlaceModal)
