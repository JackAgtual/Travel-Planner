import CardGrid from './CardGrid'
import PlaceCard from './PlaceCard'
import { PlaceData, SelectedPlaces } from '../types/place'

type PlaceGridProps = {
  placeType: string
  places: PlaceData[]
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlaces>>
}

function PlacesGrid({ placeType, places, setSelectedPlaces }: PlaceGridProps) {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-center text-4xl font-semibold">{placeType}</h1>
      {places.length === 0 ? (
        <p className="text-center text-lg">
          We couldn't find any {placeType.toLowerCase()}
        </p>
      ) : (
        <CardGrid>
          {places.map((place, idx) => {
            return (
              <PlaceCard key={idx} place={place} setSelectedPlaces={setSelectedPlaces} />
            )
          })}
        </CardGrid>
      )}
    </div>
  )
}

export default PlacesGrid
