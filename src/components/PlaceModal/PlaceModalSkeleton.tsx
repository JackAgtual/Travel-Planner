import Skeleton from '../Skeleton'
import ReviewSkeleton from './ReviewSkeleton'

function PlaceModalSkeleton() {
  return (
    <div className="w-screen max-w-5xl space-y-4">
      <div className="flex items-center justify-between gap-x-4">
        <Skeleton className="h-8 w-72" />
        <div className="flex items-center gap-x-4">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
      <Skeleton className="aspect-video h-auto rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="w-1/2" />
        <Skeleton className="w-1/2" />
        <Skeleton className="w-1/2" />
        <Skeleton className="w-1/2" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="w-72" />
        <Skeleton className="w-72" />
        <Skeleton className="w-72" />
        <Skeleton className="w-72" />
        <Skeleton className="w-72" />
      </div>
      <Skeleton className="h-8 w-48" />
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <ReviewSkeleton key={idx} />
        ))}
      </div>
    </div>
  )
}

export default PlaceModalSkeleton
