import CardGrid from '../CardGrid'
import Skeleton from '../Skeleton'
import LoadingCard from '../LoadingCard'

function DestinationDisplaySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[500px] rounded-lg" />
      <Skeleton className="mx-auto h-9 w-80" />
      <CardGrid>
        {Array.from({ length: 10 }).map((_, idx) => {
          return <LoadingCard key={idx} />
        })}
      </CardGrid>
    </div>
  )
}

export default DestinationDisplaySkeleton
