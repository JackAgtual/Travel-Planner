import { GoogleMap } from '@react-google-maps/api'
import Marker from './Marker'
import { Coordinates, SelectedPlaces } from '../../types/place'
import { useMemo } from 'react'

type MapProps = {
  coordinates: Coordinates
  selectedPlaces: SelectedPlaces
  isLoaded: boolean
}

function Map({ coordinates, selectedPlaces, isLoaded }: MapProps) {
  if (coordinates === undefined) return

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
          <Marker key={place.name} place={place} />
        ))}
      </GoogleMap>
    </>
  )
}

export default Map
