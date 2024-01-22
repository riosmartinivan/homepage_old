"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

interface IStyledHeisenberg {
  color: "white" | "black"
  open?: boolean
}

export const StyledHeisenberg = styled.button`
  position: relative;

  width: 1.8rem;
  height: 1.125rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    width: 50%;
    height: 12.5%;
    background: ${({ theme, color }: IStyledHeisenberg & { theme: Theme }) =>
      color === "white" ? theme.color.white : theme.color.black};
    transition: all 0.25s ease-in-out;

    &:nth-of-type(even) {
      left: 50%;
      border-radius: 0 0.5rem 0.5rem 0;
    }

    &:nth-of-type(odd) {
      left: 0;
      border-radius: 0.5rem 0 0 0.5rem;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      top: 0;
    }

    &:nth-of-type(3),
    &:nth-of-type(4) {
      top: 50%;
    }

    &:nth-of-type(5),
    &:nth-of-type(6) {
      top: 100%;
    }

    ${({ open }: IStyledHeisenberg) =>
      open &&
      css`
        &:nth-of-type(1),
        &:nth-of-type(6) {
          transform: rotate(45deg);
        }

        &:nth-of-type(2),
        &:nth-of-type(5) {
          transform: rotate(-45deg);
        }

        &:nth-of-type(1) {
          left: 9%;
          top: 21%;
        }

        &:nth-of-type(2) {
          left: calc(50% - 9%);
          top: 21%;
        }

        &:nth-of-type(3) {
          left: -50%;
          opacity: 0;
        }

        &:nth-of-type(4) {
          left: 100%;
          opacity: 0;
        }

        &:nth-of-type(5) {
          left: 9%;
          top: 73%;
        }

        &:nth-of-type(6) {
          left: calc(50% - 9%);
          top: 73%;
        }
      `}
  }
`
