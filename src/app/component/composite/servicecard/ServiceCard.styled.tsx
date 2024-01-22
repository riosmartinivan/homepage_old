"use client"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface IBox {
  flexDirection: string
  margin?: string
}

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }: IBox) => flexDirection};
  text-align: center;

  ${({ margin }: IBox) =>
    margin &&
    css`
      margin-left: ${margin};
      margin-right: ${margin};
    `};

  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`
