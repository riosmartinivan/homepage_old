"use client"

import { css, useTheme } from "@emotion/react"
import React, { memo, useRef } from "react"
import { motion, Variants } from "framer-motion"

export interface Icon {
  className?: string
  size: string
}

const iconStyles = css`
  transition: all 0.5s ease-in-out;
`

export const SliderDot = memo(({ className, size, coords }: Icon & { coords: string }) => {
  const theme = useTheme()
  const render = useRef(0)
  render.current++

  const variants: Variants = {
    firstRender: {
      top: coords,
      scale: [0, 1],
      transition: {
        scale: {
          duration: 0.4,
        },
      },
    },
    default: {
      top: coords,
      scale: [null, 0.5, 0.5, 1],
      scaleY: [null, 1.5, 1, 1],
      transition: {
        scale: {
          times: [0, 0.1, 0.6, 1],
          duration: 0.5,
        },
        scaleY: {
          times: [0, 0.3, 0.6, 1],
          duration: 0.5,
        },
      },
    },
  }

  return (
    <motion.svg
      animate={render.current === 1 ? "firstRender" : "default"}
      variants={variants}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <circle transform="translate(50 50) scale(1.21569)" fill={theme.accent} r="29.2" />
    </motion.svg>
  )
})

export const SliderSlot = ({ className, size }: Icon) => {
  const theme = useTheme()

  return (
    <svg
      css={iconStyles}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <path
        d="M30 9.287q0 7.144-5.508 12.936M30-2v12m40-.713q0 7.144 5.508 12.936M30 90.146q0-7.144-5.508-12.407M70-2v12m0 80v12m0-11.854q0-7.144 5.508-12.407M30 90v12"
        fill="none"
        stroke={theme.color.white}
        strokeWidth="5"
      />
      <path
        d="M24.597 77.84c-14.24-13.026-18.527-37.835-.035-55.685M75.411 77.84c14.24-13.026 18.528-37.835.035-55.685"
        fill="none"
        stroke={theme.color.white}
        strokeWidth="5"
      />
    </svg>
  )
}

export const SliderSide = ({ className, size }: Icon) => {
  const theme = useTheme()

  return (
    <svg
      css={iconStyles}
      className={className}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      preserveAspectRatio="none"
    >
      <path d="M30-2v104M70-2v104" fill="none" stroke={theme.color.white} strokeWidth="5" />
    </svg>
  )
}

export const SliderTop = memo(({ className, size }: Icon) => {
  const theme = useTheme()

  return (
    <svg
      css={iconStyles}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <path
        d="M70 60v42M30 60v42m0-41.47c.936-28.237 39.753-26.704 40 0"
        fill="none"
        stroke={theme.color.white}
        strokeWidth="5"
      />
    </svg>
  )
})

export const SliderBottom = memo(({ className, size }: Icon) => {
  const theme = useTheme()

  return (
    <svg
      css={iconStyles}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <path
        d="M70-2v42M30-2v42m40-.242c-.936 28.235-39.753 26.703-40 0"
        fill="none"
        stroke={theme.color.white}
        strokeWidth="5"
      />
    </svg>
  )
})
