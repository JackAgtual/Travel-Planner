import { useState } from 'react'

export default function useFetch<T>(
  url: string,
): [T | undefined, boolean, boolean, () => Promise<void | T> | undefined] {
  const [data, setData] = useState<undefined | T>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = () => {
    if (!url) return
    setIsLoading(true)
    setIsError(false)
    return fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        setData(data)
        return data
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return [data, isLoading, isError, fetchData]
}
