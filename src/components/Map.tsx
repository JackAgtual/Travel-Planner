import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { Coordinates } from '../types/place'

type MapProps = {
  coordinates: Coordinates
}

function Map({ coordinates }: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })
  if (!isLoaded) return <p>Loading...</p>

  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: coordinates.lat, lng: coordinates.lon }}
        mapContainerStyle={{ width: '100%', height: '500px' }}
      ></GoogleMap>
    </>
  )
}

export default Map
