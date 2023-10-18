import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsCircleFill, BsCircle } from 'react-icons/bs'

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

  const handleIndexClick = (targetIndex: number) => {
    setImageIdx(targetIndex)
  }

  return (
    <div className="relative h-full w-full">
      <img
        key={images[imageIdx]}
        src={images[imageIdx]}
        className="h-full w-full rounded-lg object-cover"
      />
      <button
        className="group absolute bottom-1/2 left-0 h-full translate-y-1/2 rounded-lg px-4 transition-all hover:bg-black hover:bg-opacity-25"
        onClick={decrementImage}
      >
        <IoIosArrowBack className="h-10 w-10 fill-white stroke-2 transition-all group-hover:scale-150" />
      </button>
      <button
        className="group absolute bottom-1/2 right-0 h-full translate-y-1/2 rounded-lg px-4 transition-all hover:bg-black hover:bg-opacity-25"
        onClick={incrementImage}
      >
        <IoIosArrowForward className="h-10 w-10 fill-white stroke-2 transition-all group-hover:scale-150" />
      </button>
      <div className="absolute bottom-2 right-1/2 flex translate-x-1/2 gap-x-3 rounded-full bg-slate-200 bg-opacity-50 px-2 py-1">
        {images.map((_, idx) =>
          idx === imageIdx ? (
            <BsCircleFill
              onClick={() => handleIndexClick(idx)}
              className="h-4 w-4 cursor-pointer transition-all hover:scale-125"
            />
          ) : (
            <BsCircle
              onClick={() => handleIndexClick(idx)}
              className="h-4 w-4 cursor-pointer transition-all hover:scale-125"
            />
          ),
        )}
      </div>
    </div>
  )
}

export default ImageCarousel
