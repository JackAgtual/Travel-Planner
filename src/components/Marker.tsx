import { MarkerF, InfoWindowF } from '@react-google-maps/api'
import { PlaceData } from '../types/place'
import { useState } from 'react'

type MarkerProps = {
  place: PlaceData
}

function Marker({ place }: MarkerProps) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const position = { lat: place.location.lat, lng: place.location.lon }

  return (
    <>
      <MarkerF position={position} onClick={handleClick}>
        {open && (
          <InfoWindowF position={position}>
            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-center text-lg font-semibold">{place.name}</h1>
              <img src={place.icon} className="h-10" />
              <div>
                <p>{place.address.line1}</p>
                <p>{place.address.line2}</p>
              </div>
            </div>
          </InfoWindowF>
        )}
      </MarkerF>
    </>
  )
}

export default Marker
