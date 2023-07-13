import PlaceCard from './PlaceCard'
import { PlaceResponse } from '../types/backend'

type PlaceGridProps = {
  placeType: string
  places: PlaceResponse[]
}

function PlacesGrid({ placeType, places }: PlaceGridProps) {
  return (
    <>
      <h1 className="text-center text-xl font-semibold">{placeType}</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start">
          {places.map((place) => {
            return <PlaceCard key={place.name} place={place} />
          })}
        </div>
      </div>
    </>
  )
}

export default PlacesGrid
