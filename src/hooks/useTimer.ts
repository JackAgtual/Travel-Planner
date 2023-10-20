import { useState } from 'react'

function useTimer(time: number, callback: Function) {
  const [, setTimeoutId] = useState<number | null>(null)

  function startTimer() {
    const tmpId = setTimeout(() => {
      callback()
    }, time)

    setTimeoutId(tmpId)
  }

  function stopTimer() {
    // need to use function version in case no re-render occurs between start and stop timer
    setTimeoutId((prevId) => {
      if (prevId !== null) {
        clearTimeout(prevId)
      }
      return null
    })
  }

  return [startTimer, stopTimer]
}

export default useTimer
