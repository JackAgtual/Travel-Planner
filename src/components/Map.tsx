import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { Coordinates, SelectedPlaces } from '../types/place'
import { useMemo } from 'react'

type MapProps = {
  coordinates: Coordinates
  selectedPlaces: SelectedPlaces
}

function Map({ coordinates, selectedPlaces }: MapProps) {
  if (coordinates === undefined) return

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const mapCenter = useMemo(() => {
    return { lat: coordinates.lat, lng: coordinates.lon }
  }, [coordinates.lat, coordinates.lon])

  if (!isLoaded) return <p>Loading...</p>
  return (
    <>
      <GoogleMap
        zoom={10}
        center={mapCenter}
        mapContainerStyle={{ width: '100%', height: '500px' }}
      >
        {[...selectedPlaces].map((place) => (
          <MarkerF
            key={place.name}
            position={{ lat: place.location.lat, lng: place.location.lon }}
          />
        ))}
      </GoogleMap>
    </>
  )
}

export default Map
