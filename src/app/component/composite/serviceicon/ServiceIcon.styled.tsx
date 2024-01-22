"use client"

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Background, Border, Box, Contract, Gears, Persons } from "./ServiceIcon.svg"

interface IStyle {
  orientation: "left" | "right"
  dropShadowFilterId: string
}

interface IContainer {
  size?: string
  glowFilterId: string
}
export const Container = styled.div`
  position: relative;
  object-fit: contain;

  ${({ size, glowFilterId }: IContainer) => css`
    min-width: ${size};
    min-height: ${size};

    &:hover rect {
      filter: none;
    }

    &:hover svg > g,
    &:hover svg > path {
      filter: url(#${glowFilterId});
    }
  `};
`

export const BackgroundIcon = styled(Background)`
  position: absolute;
  overflow: visible;
  top: 0;
  left: 0;

  & > rect {
    filter: ${({ dropShadowFilterId }: { dropShadowFilterId: string }) => `url(#${dropShadowFilterId})`};
  }
`

export const BorderIcon = styled(Border)`
  position: absolute;
  overflow: visible;
  top: 0;
  left: 0;

  ${({ orientation }: { orientation: "left" | "right" }) =>
    orientation === "right" &&
    css`
      transform: scaleX(-1);
    `};
`

const iconStyles = css`
  position: absolute;
  overflow: visible;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const BoxIcon = styled(Box)`
  ${iconStyles};
  transform: ${({ orientation }: IStyle) => (orientation === "left" ? "translateX(-15%)" : "translateX(15%)")};

  & > g {
    filter: ${({ dropShadowFilterId }: IStyle) => `url(#${dropShadowFilterId})`};
  }
`

export const PersonsIcon = styled(Persons)`
  ${iconStyles};
  transform: ${({ orientation }: IStyle) => (orientation === "left" ? "translateX(-15%)" : "translateX(15%)")};

  & > g {
    filter: ${({ dropShadowFilterId }: IStyle) => `url(#${dropShadowFilterId})`};
  }
`

export const GearsIcon = styled(Gears)`
  ${iconStyles};
  transform: ${({ orientation }: IStyle) => (orientation === "left" ? "translateX(-15%)" : "translateX(15%)")};

  & > g {
    filter: ${({ dropShadowFilterId }: IStyle) => `url(#${dropShadowFilterId})`};
  }
`

export const ContractIcon = styled(Contract)`
  ${iconStyles};
  transform: ${({ orientation }: IStyle) => (orientation === "left" ? "translateX(-15%)" : "translateX(15%)")};

  & > g {
    filter: ${({ dropShadowFilterId }: IStyle) => `url(#${dropShadowFilterId})`};
  }
`
