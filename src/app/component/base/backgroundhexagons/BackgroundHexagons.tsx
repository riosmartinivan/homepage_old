import { useTheme } from "@emotion/react"
import { DropShadow } from "../filter/DropShadow"
import { Glow } from "../filter/Glow"
import React from "react"
import { BackgroundHexagonIcon, Container } from "./BackgroundHexagons.styled"

interface IBackgroundHexagon {
  className?: string
  size: number
  orientation: "left" | "right"
  turnedOnHexagons?: number[]
  disabledHexagons?: number[]
  amount: number
}

const BackgroundHexagons = ({
  className,
  size,
  orientation,
  turnedOnHexagons,
  disabledHexagons,
  amount,
}: IBackgroundHexagon) => {
  const theme = useTheme()

  const shadowId = Math.random().toString(36).slice(2, 12)
  const glowId = Math.random().toString(36).slice(2, 12)

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
          <DropShadow id={shadowId} x={orientation === "left" ? -10 : 10} y={10} color={theme.color.black} />
          <Glow id={glowId} blink />
        </defs>
      </svg>

      <Container className={className} width={size * 3}>
        {[...Array(amount)].map((_, index) => {
          const turnedOn = turnedOnHexagons?.find((h) => h === index) !== undefined
          const disabled = disabledHexagons?.find((h) => h === index) !== undefined

          return (
            <BackgroundHexagonIcon
              key={index}
              disabled={disabled}
              size={`${size}rem`}
              colored={turnedOn}
              dropShadowFilterId={shadowId}
              glowFilterId={turnedOn ? glowId : undefined}
              translateX={getHexagonTranslateX(index)}
              translateY={getHexagonTranslateY(index)}
            />
          )
        })}
      </Container>
    </>
  )
}

function getHexagonTranslateX(index: number): number {
  const spacing = (index % 3) * 10

  if (index < 3 || index > 5) {
    return 55 + spacing
  }
  return spacing
}

function getHexagonTranslateY(index: number): number {
  if (index < 3) return 16
  if (index > 5) return -16
  return 0
}

export default BackgroundHexagons
