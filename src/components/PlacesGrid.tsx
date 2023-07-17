import PlaceCard from './PlaceCard'
import { PlaceData } from '../types/place'

type PlaceGridProps = {
  placeType: string
  places: PlaceData[]
}

function PlacesGrid({ placeType, places }: PlaceGridProps) {
  return (
    <>
      <h1 className="text-center text-xl font-semibold">{placeType}</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4: 2xl:grid-cols-5">
        {places.map((place) => {
          return <PlaceCard key={place.name} place={place} />
        })}
      </div>
    </>
  )
}

export default PlacesGrid
