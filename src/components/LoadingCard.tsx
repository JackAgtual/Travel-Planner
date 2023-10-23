import Skeleton from './Skeleton'

function LoadingCard() {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm grow  space-y-3 rounded-lg border-2 pb-4">
        <Skeleton className="aspect-video h-auto rounded-lg" />
        <Skeleton className="mx-auto w-5/6" />
        <Skeleton className="mx-auto w-5/6" />
      </div>
    </div>
  )
}

export default LoadingCard
