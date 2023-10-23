import { ReactNode } from 'react'

type CardGridProps = {
  children: ReactNode
}

function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {children}
    </div>
  )
}

export default CardGrid
