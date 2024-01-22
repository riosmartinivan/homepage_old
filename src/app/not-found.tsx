"use client"

import Image from "next/image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledImage = ({ className }: { className?: string }) => (
  <Image className={className} src="https://http.cat/404" alt="Not found!" fill />
)

const NotFoundImage = styled(StyledImage)`
  position: relative !important;
  object-fit: contain;
  width: 50% !important;
  height: auto !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100% !important;
  }
`

const NotFound = () => (
  <div
    css={css`
      background-color: black;
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 2rem;
      height: 70vh;
    `}
  >
    <NotFoundImage />
  </div>
)

export default NotFound
