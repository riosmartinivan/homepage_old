"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

export const Container = styled.div`
  width: ${({ width }: { width: string }) => width};
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  text-align: center;

  & > input {
    display: none;
  }
`

interface IBackground {
  width: string
  orientation: "left" | "right" | "center"
  height: number
  extraHeight?: number
  contentHeight: number
  expanded?: boolean
}

const backgroundStyles = css`
  position: absolute;
  left: 0;
  height: 100%;
  padding: 0 1.5rem;
  border-radius: 0.6rem;
  transition: all 0.25s ease-in-out;
`

export const Background = styled.div`
  ${backgroundStyles};

  ${({ width, height, extraHeight = 0, contentHeight, expanded }: IBackground) => {
    const totalHeight = height + extraHeight
    return css`
      top: -${extraHeight / 2}rem;
      width: ${width};
      height: ${expanded ? totalHeight + contentHeight : totalHeight}rem;
    `
  }};

  border: solid 1px ${({ theme }: { theme: Theme }) => theme.color.white}80;

  ${({ orientation }: IBackground) => {
    let degrees: string
    switch (orientation) {
      case "left":
        degrees = "190deg"
        break
      case "right":
        degrees = "170deg"
        break
      case "center":
        degrees = "180deg"
    }
    return css`
      mask-image: linear-gradient(${degrees}, black, transparent);
    `
  }};

  ${({ expanded }: IBackground) => {
    const alpha = expanded ? 0.3 : 0.2
    return css`
      background-image: radial-gradient(circle at 50% 100%, black, rgba(255, 255, 255, ${alpha}) 150%);
    `
  }};
`

export const Shadow = styled.div`
  ${backgroundStyles};

  ${({ width, height, extraHeight = 0, contentHeight, expanded }: IBackground) => {
    const totalHeight = height + extraHeight
    return css`
      top: -${extraHeight / 2}rem;
      width: ${width};
      height: ${expanded ? totalHeight + contentHeight : totalHeight}rem;
    `
  }};

  border: solid 1px transparent;

  ${({ orientation }: IBackground) => {
    let shadowOrientation: string
    switch (orientation) {
      case "left":
        shadowOrientation = "-1.5px"
        break
      case "right":
        shadowOrientation = "1.5px"
        break
      case "center":
        shadowOrientation = "0"
    }

    return css`
      box-shadow: ${shadowOrientation} 4px 4px 0 rgba(0, 0, 0, 0.5);
    `
  }};
`

export const Clickable = styled.div`
  width: 100%;
  cursor: pointer;
  z-index: 1;

  &:hover {
    filter: ${({ filterId }: { filterId: string }) => `url(#${filterId})`};
  }
`

interface ICollapsible {
  expanded?: boolean
  descriptionHeight: number
}

export const Collapsible = styled.div`
  z-index: 1;
  overflow: hidden;
  transition: all 0.25s ease-in-out;

  ${({ expanded, descriptionHeight }: ICollapsible) =>
    expanded ? `max-height: ${descriptionHeight}rem` : "max-height: 0"}
`
