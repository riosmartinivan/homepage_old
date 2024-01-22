"use client"

import styled from "@emotion/styled"
import { HiOutlineArrowCircleRight } from "react-icons/all"
import React from "react"
import Image, { StaticImageData } from "next/image"
import Video from "../../../base/Video"
import { css } from "@emotion/react"

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 30rem;
  text-align: center;
  transform: translateX(40%);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: translateX(0);
  }
`
export const LearnMore = styled.div`
  font-size: ${({ theme }) => theme.font.size.md};
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  border: none;
`
const StyledArrow = ({ className }: { className?: string }) => (
  <HiOutlineArrowCircleRight size="1.7rem" className={className} />
)
export const Arrow = styled(StyledArrow)`
  color: ${({ theme }) => theme.accent};
`
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.25rem;
`

const backgroundStyles = css`
  position: absolute;
  filter: brightness(50%);
  z-index: -1;
`

export const BackgroundVideo = styled(Video)`
  ${backgroundStyles};
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
`

interface IStyledBackgroundImage {
  className?: string
  src: StaticImageData
}

const StyledBackgroundImage = (props: IStyledBackgroundImage) => <Image {...props} alt="Background image" fill />

export const HeroBackgroundImage = styled(StyledBackgroundImage)`
  ${backgroundStyles};
  object-fit: cover;
  transform-origin: 0;
`
