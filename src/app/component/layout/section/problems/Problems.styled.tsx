"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

interface IContainer {
  padding: {
    xs?: string
    sm?: string
    md: string
    lg?: string
    xl?: string
    xxl?: string
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow: hidden;

  ${({ padding, theme }: IContainer & { theme: Theme }) => {
    const xsMq = padding.xs
      ? css`
          @media (max-width: ${theme.breakpoints.xs}) {
            padding: 3rem ${padding.xs};
          }
        `
      : undefined

    const smMq = padding.sm
      ? css`
          @media (max-width: ${theme.breakpoints.sm}) {
            padding: 3rem ${padding.sm};
          }
        `
      : undefined

    const mdMq = padding.md
      ? css`
          @media (max-width: ${theme.breakpoints.md}) {
            padding: 3rem ${padding.md};
          }
        `
      : undefined

    const lgMq = padding.lg
      ? css`
          @media (max-width: ${theme.breakpoints.lg}) {
            padding: 3rem ${padding.lg};
          }
        `
      : undefined

    const xlMq = padding.xl
      ? css`
          @media (max-width: ${theme.breakpoints.xl}) {
            padding: 3rem ${padding.xl};
          }
        `
      : undefined

    const xxlMq = padding.xxl
      ? css`
          @media (max-width: ${theme.breakpoints.xxl}) {
            padding: 3rem ${padding.xxl};
          }
        `
      : undefined

    return css`
      padding: 4rem ${padding.md};
      ${xxlMq};
      ${xlMq};
      ${lgMq};
      ${mdMq};
      ${smMq};
      ${xsMq};
    `
  }};
`

export const ListContainer = styled.div`
  position: relative;
  padding: ${({ padding }: { padding: number }) => `${padding}rem 0`};
`

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ gap }: { gap?: number }) =>
    gap &&
    css`
      gap: ${gap}rem;
    `};
`

interface IPaneContainer {
  orientation: "left" | "right" | "center"
  index: number
}

export const PaneContainer = styled.div`
  display: flex;
  justify-content: ${({ orientation }: IPaneContainer) => {
    switch (orientation) {
      case "left":
        return "flex-start"
      case "right":
        return "flex-end"
      case "center":
        return "center"
    }
  }};
`

export const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - (${({ width }: { width: string }) => width} / 2));

  & > div {
    position: relative;

    & > div {
      position: absolute;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: calc(105% - (${({ width }: { width: string }) => width} / 2));
  }
`
