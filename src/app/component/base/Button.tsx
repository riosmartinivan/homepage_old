"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

interface IButton {
  buttonType: "primary" | "secondary"
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

export const Button = styled.button`
  min-width: 4rem;
  min-height: 2rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.2s ease-in-out;

  font-size: ${({ theme, fontSize }: IButton & { theme: Theme }) =>
    fontSize ? theme.font.size[fontSize] : theme.font.size.sm};
  font-family: ${({ theme }: { theme: Theme }) => theme.font.family};
  border: solid 1.5px ${({ theme }: { theme: Theme }) => theme.accent};
  border-radius: 0.3rem;

  ${({ buttonType, theme }: IButton & { theme: Theme }) =>
    buttonType === "primary"
      ? css`
          background: ${theme.accent};
          color: ${theme.color.pantone};
        `
      : css`
          background: transparent;
          color: ${theme.accent};
        `}

  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }: { theme: Theme }) => theme.accent};
  }
`
