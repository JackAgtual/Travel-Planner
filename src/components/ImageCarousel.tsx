import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type ImageCarouselProps = {
  images: string[]
}
function ImageCarousel({ images }: ImageCarouselProps) {
  const [imageIdx, setImageIdx] = useState(0)

  const incrementImage = () => {
    let newIdx = imageIdx + 1
    if (newIdx >= images.length) {
      newIdx = 0
    }
    setImageIdx(newIdx)
  }

  const decrementImage = () => {
    let newIdx = imageIdx - 1
    if (newIdx < 0) {
      newIdx = images.length - 1
    }
    setImageIdx(newIdx)
  }

  return (
    <div className="relative h-full w-full">
      <img
        key={images[imageIdx]}
        src={images[imageIdx]}
        className="h-full w-full object-cover"
      />
      <button
        className="absolute bottom-1/2 left-0 h-full translate-y-1/2 from-gray-700 pl-4 pr-3 hover:bg-gradient-to-r"
        onClick={decrementImage}
      >
        <IoIosArrowBack className="h-10 w-10 fill-white stroke-2" />
      </button>
      <button
        className="absolute bottom-1/2 right-0 h-full translate-y-1/2 from-gray-700 pl-3 pr-4 hover:bg-gradient-to-l"
        onClick={incrementImage}
      >
        <IoIosArrowForward className="h-10 w-10  fill-white" />
      </button>
    </div>
  )
}

export default ImageCarousel
