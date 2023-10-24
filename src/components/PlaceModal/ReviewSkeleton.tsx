import Skeleton from '../Skeleton'

function ReviewSkeleton() {
  return (
    <div className="space-y-4 border-b-2 pb-6 last:border-0">
      <div className="flex items-center gap-x-3">
        <Skeleton className="h-10 w-10" />
        <Skeleton className="w-36" />
      </div>
      <div className="flex items-center gap-x-3">
        <Skeleton className="w-24" />
        <Skeleton className="w-24" />
      </div>
      <Skeleton />
      <Skeleton className="w-32" />
    </div>
  )
}

export default ReviewSkeleton
