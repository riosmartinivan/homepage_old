import { useEffect, useState } from "react"
import useWindowSize from "./useWindowSize"

const useRootFontSize = (): number => {
  const [fontSize, setFontSize] = useState(16)
  const windowSize = useWindowSize()

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    setFontSize(Number(window.getComputedStyle(body).getPropertyValue("font-size").slice(0, -2)))
  }, [windowSize])

  return fontSize
}

export default useRootFontSize
