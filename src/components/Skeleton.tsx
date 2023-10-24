import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type SkeletonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge('h-4 w-full animate-pulse rounded-full bg-slate-200', className)}
    ></div>
  )
}

export default Skeleton
