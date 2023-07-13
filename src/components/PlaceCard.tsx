import { PlaceResponse } from '../types/backend'

type PlaceCardProps = {
  place: PlaceResponse
}

function PlaceCard({ place }: PlaceCardProps) {
  const getRatingString = (place: PlaceResponse) => {
    if (place.numRatings === 0) {
      return 'No ratings'
    }

    return `${place.rating} / 5 (${place.numRatings} ${
      place.numRatings === 1 ? 'rating' : 'ratings'
    })`
  }

  return (
    <div className="flex flex-col justify-center border-2 rounded-md m-2 text-lg max-w-sm">
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
