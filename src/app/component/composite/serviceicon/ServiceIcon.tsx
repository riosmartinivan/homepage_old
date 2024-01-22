"use client"

import {
  BackgroundIcon,
  BorderIcon,
  BoxIcon,
  Container,
  ContractIcon,
  GearsIcon,
  PersonsIcon,
} from "./ServiceIcon.styled"
import { DropShadow } from "../../base/filter/DropShadow"
import { useTheme } from "@emotion/react"
import { Glow } from "../../base/filter/Glow"

interface IServiceIcon {
  icon: "box" | "persons" | "gears" | "contract"
  orientation: "left" | "right"
  size?: string
}

const ServiceIcon = ({ icon, orientation, size = "12rem" }: IServiceIcon) => {
  const theme = useTheme()

  let Icon
  switch (icon) {
    case "box":
      Icon = BoxIcon
      break
    case "persons":
      Icon = PersonsIcon
      break
    case "gears":
      Icon = GearsIcon
      break
    case "contract":
      Icon = ContractIcon
      break
  }
  const shadowId = Math.random().toString(36).slice(2, 12)
  const glowId = Math.random().toString(36).slice(2, 12)

  return (
    <Container size={size} glowFilterId={glowId}>
      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
          <DropShadow id={shadowId} x={orientation === "left" ? -4 : 4} y={4} color={theme.color.black} />
          <Glow id={glowId} blink />
        </defs>
      </svg>

      <BackgroundIcon dropShadowFilterId={shadowId} />
      <BorderIcon orientation={orientation} />
      <Icon orientation={orientation} dropShadowFilterId={shadowId} />
    </Container>
  )
}

export default ServiceIcon
