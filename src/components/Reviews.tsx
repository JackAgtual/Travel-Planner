import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { PlaceDetails } from '../types/place'

type ReviewsProps = Pick<PlaceDetails, 'reviews'>

function Reviews({ reviews }: ReviewsProps) {
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(reviews.length).fill(false),
  )

  const handleExpand = (idx: number) => {
    setExpanded((prev) => {
      const updated = [...prev]
      updated[idx] = !prev[idx]
      return updated
    })
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, idx) => {
        return (
          <div className="border-b border-gray-300 pb-6 last:border-0">
            <div className="flex items-center gap-x-3">
              <img
                src={review.authorPhoto}
                alt={`${review.author} profile picture`}
                className="aspect-square h-10"
              />
              <h3>{review.author}</h3>
            </div>
            <div className="flex items-center gap-x-4">
              <p>{`${review.rating} / 5`}</p>
              <p>{review.time}</p>
            </div>
            <p className={expanded[idx] ? '' : 'truncate'}>{review.text}</p>
            {expanded[idx] ? (
              <button onClick={() => handleExpand(idx)}>
                <div className="flex items-center gap-x-1">
                  <p>Read less</p>
                  <IoIosArrowUp />
                </div>
              </button>
            ) : (
              <button onClick={() => handleExpand(idx)}>
                <div className="flex items-center gap-x-1">
                  <p>Read more</p>
                  <IoIosArrowDown />
                </div>
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
