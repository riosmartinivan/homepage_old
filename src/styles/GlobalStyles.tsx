"use client"

import { css, Global, useTheme } from "@emotion/react"

export const breakpoints = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  xxl: 1920,
}

export const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          font-family: ${theme.font.family};
          scroll-behavior: smooth;
          overflow-x: hidden;

          // We dynamically calculate the font to scale between the min and max font size when the screen size
          //  moves from the smaller breakpoint to the biggest one
          // https://www.smashingmagazine.com/2016/05/fluid-typography/
          font-size: calc(
            ${theme.font.minimumSize}px + (${theme.font.maximumSize} - ${theme.font.minimumSize}) *
              (100vmax - ${breakpoints.xs}px) / (${breakpoints.xxl} - ${breakpoints.xs})
          );
        }
      `}
    />
  )
}
