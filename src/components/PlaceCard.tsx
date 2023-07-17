import { PlaceData } from '../types/place'

type PlaceCardProps = {
  place: PlaceData
}

function PlaceCard({ place }: PlaceCardProps) {
  const getRatingString = (place: PlaceData) => {
    if (place.numRatings === 0) {
      return 'No ratings'
    }

    return `${place.rating} / 5 (${place.numRatings} ${
      place.numRatings === 1 ? 'rating' : 'ratings'
    })`
  }

  return (
    <div className="flex flex-col justify-center border-2 rounded-md mx-auto text-lg max-w-sm: xl:max-w-2xl">
      <img
        src={place.photoUrl}
        className="aspect-video object-none w-full rounded-md mx-auto"
      />
      <h1 className="text-center text-xl">{place.name}</h1>
      <p className="text-center">{getRatingString(place)}</p>
    </div>
  )
}

export default PlaceCard
