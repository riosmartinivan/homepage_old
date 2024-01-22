"use client"

import { useTheme } from "@emotion/react"
import React from "react"

interface IBackgroundHexagonIcon {
  size?: string
  className?: string
  colored?: boolean
}

const BackgroundHexagon = ({ size = "10rem", className, colored }: IBackgroundHexagonIcon) => {
  const theme = useTheme()

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 175 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity=".1">
        <path
          d="M82.889 1.259a10 10 0 0 1 8.985 0l76.932 38.682a10 10 0 0 1 5.508 8.935v75.092a10 10 0 0 1-5.508 8.934l-76.933 38.683a10 10 0 0 1-8.984 0L5.956 132.902a10 10 0 0 1-5.507-8.934V48.876a10 10 0 0 1 5.507-8.934L82.89 1.258Z"
          fill={colored ? theme.accent : theme.color.grey}
          fillOpacity={colored ? undefined : 0.75}
        />
      </g>
    </svg>
  )
}

export default BackgroundHexagon
