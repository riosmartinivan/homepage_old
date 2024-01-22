"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

interface IText {
  color?: string
  accent?: string
  alignment?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

export const Title = styled.h1`
  font-size: ${({ theme, size }: IText & { theme: Theme }) => (size ? theme.font.size[size] : theme.font.size.xxl)};
  text-align: ${({ alignment }: IText) => alignment ?? "center"};
  
  ${({ theme, color, accent }: IText & { theme: Theme }) => css`
    color: ${color ?? theme.color.white};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}}
`

export const Subtitle = styled.h2`
  font-size: ${({ theme, size }: IText & { theme: Theme }) => (size ? theme.font.size[size] : theme.font.size.xl)};
  text-align: ${({ alignment }: IText) => alignment ?? "center"};
  
  ${({ theme, color, accent }: IText & { theme: Theme }) => css`
    color: ${color ?? theme.color.white};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}}
`

export const Text = styled.p`
  font-size: ${({ theme, size }: IText & { theme: Theme }) => (size ? theme.font.size[size] : theme.font.size.md)};
  text-align: ${({ alignment }: IText) => alignment ?? "center"};

  ${({ theme, color, accent }: IText & { theme: Theme }) => css`
    color: ${color ?? theme.color.white};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}}
`
