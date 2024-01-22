"use client"

import { Text, Subtitle } from "../Text"
import { Background, Clickable, Collapsible, Container, Shadow } from "./Pane.styled"
import { Glow } from "../filter/Glow"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import useRootFontSize from "../../../functions/useRootFontSize"

interface IPane {
  width: string
  orientation: "left" | "right" | "center"
  title: React.ReactNode | string
  description: React.ReactNode | string
  backgroundYPadding?: number
  onChange?: (expanded: boolean) => void
  handleSizes?: (titleHeight: number, descriptionHeight: number) => void
}

const Pane = ({ width, orientation, title, description, backgroundYPadding = 0, onChange, handleSizes }: IPane) => {
  const glowId = Math.random().toString(36).slice(2, 12)

  const [expanded, setExpanded] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const [titleHeight, setTitleHeight] = useState(0)
  const [descriptionHeight, setDescriptionHeight] = useState(0)
  const fontSize = useRootFontSize()

  useLayoutEffect(() => {
    const tHeight = (titleRef.current?.getBoundingClientRect().height ?? 0) / fontSize
    const dHeight = (descriptionRef.current?.getBoundingClientRect().height ?? 0) / fontSize

    setTitleHeight(tHeight)
    setDescriptionHeight(dHeight)

    handleSizes && handleSizes(tHeight, dHeight)
  }, [fontSize, handleSizes])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onChange && onChange(expanded), [expanded])

  return (
    <Container width={width} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
          <Glow id={glowId} blink />
        </defs>
      </svg>

      <Background
        width={width}
        orientation={orientation}
        height={titleHeight}
        extraHeight={backgroundYPadding}
        contentHeight={descriptionHeight}
        expanded={expanded}
      />
      <Shadow
        width={width}
        orientation={orientation}
        height={titleHeight}
        extraHeight={backgroundYPadding}
        contentHeight={descriptionHeight}
        expanded={expanded}
      />
      <Clickable filterId={glowId} ref={titleRef}>
        <Subtitle as="h3" size="md">
          {title}
        </Subtitle>
      </Clickable>
      <Collapsible expanded={expanded} descriptionHeight={descriptionHeight}>
        <div css={{ overflow: "hidden" }} ref={descriptionRef}>
          <Text size="sm">{description}</Text>
        </div>
      </Collapsible>
    </Container>
  )
}

export default Pane
