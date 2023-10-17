import { cloneElement } from 'react'
import { IconType } from 'react-icons'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type RatingProps = {
  rating: number | null
  maxRating?: number
}
function Rating({ rating, maxRating = 5 }: RatingProps) {
  const rounedRating = Math.round(rating ?? 0)

  const stars: IconType[] = []
  for (let i = 0; i < maxRating; i++) {
    if (i < rounedRating) {
      stars.push(AiFillStar)
    } else {
      stars.push(AiOutlineStar)
    }
  }

  return (
    <div className="flex">
      {stars.map((StarIcon, idx) => {
        return cloneElement(<StarIcon key={idx} className="h-5 w-5 fill-yellow-400" />)
      })}
    </div>
  )
}

export default Rating
