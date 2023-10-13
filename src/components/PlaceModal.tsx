import { forwardRef, ForwardedRef } from 'react'
import { PlaceData } from '../types/place'

type PlaceModalProps = {
  place: PlaceData
}

function PlaceModal({ place }: PlaceModalProps, ref: ForwardedRef<HTMLDialogElement>) {
  return (
    <dialog ref={ref}>
      <h1>{place.name}</h1>
    </dialog>
  )
}

export default forwardRef(PlaceModal)
