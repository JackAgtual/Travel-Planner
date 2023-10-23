import Map from '../components/Map'
import {
  Coordinates,
  PlaceResponse,
  queryParamToDisplayType,
  SelectedPlaces,
} from '../types/place'
import PlacesGrid from '../components/PlacesGrid'
import Weather from '../components/Weather'
import LoadingCard from './LoadingCard'
import CardGrid from './CardGrid'
import Skeleton from './Skeleton'

type DestinationDisplayProps = {
  loadingDestination: boolean
  destinationError: boolean
  mapCoordinates: Coordinates
  googleMapsIsLoaded: boolean
  places: PlaceResponse
  selectedPlaces: SelectedPlaces
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function DestinationDisplay({
  loadingDestination,
  destinationError,
  mapCoordinates,
  googleMapsIsLoaded,
  places,
  selectedPlaces,
  setSelectedPlaces,
}: DestinationDisplayProps) {
  if (destinationError) {
    return <p className="text-center text-2xl">Sorry, we had trouble with that search.</p>
  }

  if (loadingDestination) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[500px] rounded-lg" />
        <Skeleton className="mx-auto h-9 w-80" />
        <CardGrid>
          {Array.from({ length: 10 }).map((_) => {
            return <LoadingCard />
          })}
        </CardGrid>
      </div>
    )
  }

  return (
    <div className="mb-10 space-y-4">
      <Map
        coordinates={mapCoordinates}
        selectedPlaces={selectedPlaces}
        isLoaded={googleMapsIsLoaded}
      />
      <div className="space-y-10">
        {places.map((place) => {
          const name =
            queryParamToDisplayType[place.type as keyof typeof queryParamToDisplayType]
          return (
            <PlacesGrid
              key={place.type}
              placeType={name}
              places={place.data}
              setSelectedPlaces={setSelectedPlaces}
            />
          )
        })}
      </div>
      <Weather coordinates={mapCoordinates} />
    </div>
  )
}

export default DestinationDisplay
