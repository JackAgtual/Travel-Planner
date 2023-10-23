function LoadingCard() {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm grow animate-pulse space-y-3 rounded-lg border-2 pb-4">
        <div className="mx-auto aspect-video w-full rounded-md bg-slate-200"></div>
        <div className="mx-auto h-4 w-5/6 rounded-full bg-slate-200 px-4 text-center text-xl"></div>
        <div className="mx-auto h-4 w-5/6 rounded-full bg-slate-200 px-4 text-center text-xl"></div>
      </div>
    </div>
  )
}

export default LoadingCard
