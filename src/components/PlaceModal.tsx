import { useEffect, forwardRef, ForwardedRef } from 'react'
import usePlaceDetails from '../hooks/usePlaceDetails'
import { PlaceData } from '../types/place'

type PlaceModalProps = {
  place: PlaceData
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function PlaceModal(
  { place, modalOpen, setModalOpen }: PlaceModalProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const [placeDetails, , , fetchDetails] = usePlaceDetails(place.id)

  const handleCardClose = () => {
    console.log(`${place.name} closed`)
    setModalOpen(false)
  }

  useEffect(() => {
    if (!ref || typeof ref === 'function') return

    if (!modalOpen) return

    const cardElement = ref.current

    if (!cardElement) return

    cardElement.addEventListener('cancel', handleCardClose)
    cardElement.addEventListener('close', handleCardClose)

    fetchDetails()

    return () => {
      cardElement.removeEventListener('cancel', handleCardClose)
      cardElement.removeEventListener('close', handleCardClose)
    }
  }, [modalOpen])

  return (
    <dialog ref={ref}>
      {/* // placeholder information */}
      <h1>{place.name}</h1>
      <p>{placeDetails?.address}</p>
      <p>{placeDetails?.phoneNumber}</p>
    </dialog>
  )
}

export default forwardRef(PlaceModal)
