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
    <div className="mx-auto flex max-w-sm flex-col justify-center rounded-md border-2 text-lg xl:max-w-2xl">
      <img
        src={place.photoUrl}
        className="mx-auto aspect-video w-full rounded-md object-none"
      />
      <h1 className="mx-4 truncate text-center text-xl">{place.name}</h1>
      <p className="text-center">{getRatingString(place)}</p>
    </div>
  )
}

export default PlaceCard
