"use client"

import { useEffect, useState } from "react"

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }
    const match = window.matchMedia(query)
    match.addEventListener("change", handleChange)
    setMatches(match.matches)
    return () => {
      match.removeEventListener("change", handleChange)
    }
  }, [query])
  return matches
}

export default useMediaQuery
