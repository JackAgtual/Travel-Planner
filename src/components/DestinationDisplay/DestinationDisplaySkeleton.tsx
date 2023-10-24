import CardGrid from '../CardGrid'
import Skeleton from '../Skeleton'
import { PlaceCardSkeleton } from '../PlaceCard/'
import { MapSkeleton } from '../Map'

function DestinationDisplaySkeleton() {
  return (
    <div className="space-y-4">
      <MapSkeleton />
      <Skeleton className="mx-auto h-9 w-80" />
      <CardGrid>
        {Array.from({ length: 10 }).map((_, idx) => {
          return <PlaceCardSkeleton key={idx} />
        })}
      </CardGrid>
    </div>
  )
}

export default DestinationDisplaySkeleton
