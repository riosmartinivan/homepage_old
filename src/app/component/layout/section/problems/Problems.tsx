/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Box, Container, ListContainer, PaneContainer, SliderContainer } from "./Problems.styled"
import Pane from "../../../base/pane/Pane"
import React, { createRef, useLayoutEffect, useRef, useState } from "react"
import Slider from "../../../base/slider/Slider"
import useMediaQuery from "../../../../functions/useMediaQuery"
import { useTheme } from "@emotion/react"
import { Subtitle } from "../../../base/Text"

interface Problem {
  title: React.ReactNode | string
  description: React.ReactNode | string
}

interface PaneSize {
  paneSize?: string
  padding?: string
  gap?: number
}

interface Size {
  xs?: PaneSize
  sm?: PaneSize
  md: {
    paneSize: string
    padding: string
    gap?: number
  }
  lg?: PaneSize
  xl?: PaneSize
  xxl?: PaneSize
}

interface IProblems {
  id?: string
  title?: React.ReactNode | string
  problems: Problem[]
  size: Size
  sliderWidth?: number
}

const Problems = ({ id, title, problems, size, sliderWidth = 1 }: IProblems) => {
  const panes = useRef(
    problems.map((problem) => {
      return {
        problem: problem,
        expanded: false,
        titleHeightInRem: 0,
        descriptionHeightInRem: 0,
        ref: createRef<HTMLDivElement>(),
      }
    }),
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const [slotCoords, setSlotCoords] = useState<number[]>([])
  const [sliderHeight, setSliderHeight] = useState(0)
  const [expandedRef, setExpandedPane] = useState(0)

  const theme = useTheme()

  const matchesXsMq = size.xs?.paneSize !== undefined && useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)
  const matchesSmMq = size.sm?.paneSize !== undefined && useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const matchesMdMq = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
  const matchesLgMq = size.lg?.paneSize !== undefined && useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
  const matchesXlMq = size.xl?.paneSize !== undefined && useMediaQuery(`(max-width: ${theme.breakpoints.xl})`)
  const matchesXxlMq = size.xxl?.paneSize !== undefined && useMediaQuery(`(max-width: ${theme.breakpoints.xxl})`)

  let paneWidth = size.md.paneSize
  let gap: number | undefined
  let backgroundYPadding: number = 1
  if (matchesXsMq) {
    paneWidth = size.xs?.paneSize ?? paneWidth
    gap = size.xs?.gap ?? 2.5
    backgroundYPadding = 0.5
  } else if (matchesSmMq) {
    paneWidth = size.sm?.paneSize ?? paneWidth
    gap = size.sm?.gap ?? 2
    backgroundYPadding = 0.5
  } else if (matchesMdMq) {
    paneWidth = size.md.paneSize ?? paneWidth
    gap = size.md.gap
    backgroundYPadding = 1
  } else if (matchesLgMq) {
    paneWidth = size.lg?.paneSize ?? paneWidth
    gap = size.lg?.gap ?? 0
    backgroundYPadding = 1
  } else if (matchesXlMq) {
    paneWidth = size.xl?.paneSize ?? paneWidth
    gap = size.xl?.gap ?? 0.5
    backgroundYPadding = 2
  } else if (matchesXxlMq) {
    paneWidth = size.xxl?.paneSize ?? paneWidth
    gap = size.xxl?.gap ?? 1
    backgroundYPadding = 2.5
  }

  const listYPadding = 1.5

  const updateSizes = () => {
    setTimeout(() => {
      const slotCoordsInRem: number[] = []
      let height = 0

      panes.current.forEach(({ ref, expanded, titleHeightInRem, descriptionHeightInRem }, index) => {
        if (!ref.current) return

        let top = listYPadding + (gap ?? 0) * index // Take padding and the gap between items into account
        for (let i = index - 1; i >= 0; i--) {
          const lastPane = panes.current[i]
          top += lastPane.titleHeightInRem + (lastPane.expanded ? lastPane.descriptionHeightInRem : 0)
        }
        top = top + titleHeightInRem / 3 // Set the slot a bit more in the middle of the pane

        height += titleHeightInRem + (expanded ? descriptionHeightInRem : 0) + (gap ?? 0)
        slotCoordsInRem.push(top - sliderWidth / 2)
      })

      setSlotCoords(slotCoordsInRem)
      setSliderHeight(height + 2)
    }, 200)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(updateSizes, [])

  return (
    <Container
      id={id}
      padding={{
        xs: size.xs?.padding,
        sm: size.sm?.padding,
        md: size.md.padding,
        lg: size.lg?.padding,
        xl: size.xl?.padding,
        xxl: size.xxl?.padding,
      }}
    >
      {title && <Subtitle>{title}</Subtitle>}

      <ListContainer ref={containerRef} padding={listYPadding}>
        <Box gap={gap}>
          {panes.current.map(({ problem, ref }, index) => {
            let orientation: "left" | "right" | "center" = (index + 1) % 2 === 0 ? "right" : "left"
            if (matchesSmMq) {
              orientation = "center"
            }

            return (
              <PaneContainer key={index} ref={ref} orientation={orientation} index={index}>
                <Pane
                  width={paneWidth}
                  orientation={orientation}
                  title={problem.title}
                  description={problem.description}
                  onChange={(expanded) => {
                    expanded && setExpandedPane(index)
                    panes.current[index].expanded = expanded
                    updateSizes()
                  }}
                  handleSizes={(titleHeight, descriptionHeight) => {
                    panes.current[index].titleHeightInRem = titleHeight
                    panes.current[index].descriptionHeightInRem = descriptionHeight
                  }}
                  backgroundYPadding={backgroundYPadding}
                />
              </PaneContainer>
            )
          })}
        </Box>

        {slotCoords.length > 0 && sliderHeight > 0 && (
          <SliderContainer width={`${sliderWidth}rem`}>
            <div>
              <Slider
                slotCoordsInRem={slotCoords}
                selectedSlot={expandedRef}
                heightInRem={sliderHeight}
                widthInRem={sliderWidth}
              />
            </div>
          </SliderContainer>
        )}
      </ListContainer>
    </Container>
  )
}

export default Problems
