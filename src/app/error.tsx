"use client"

import { useEffect } from "react"

export interface IError {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: IError) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
