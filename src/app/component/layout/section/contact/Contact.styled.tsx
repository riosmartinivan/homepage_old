"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"
import { AiTwotoneCloseCircle } from "react-icons/all"
import Image from "next/image"

import Map from "../../../../../../public/media/map.png"

const StyledClose = ({ className }: { className?: string }) => <AiTwotoneCloseCircle className={className} />
export const CloseModalButton = styled(StyledClose)`
  position: absolute;
  cursor: pointer;
  width: 3.5rem;
  height: auto;
  left: 3%;
  top: 3%;

  color: white;

  & path:nth-child(3) {
    fill: ${({ theme }) => theme.color.black};
  }
`

export const GrowBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;

  width: 100%;

  & > div {
    flex: 1 1 0;
  }

  & > input,
  & > textarea {
    flex: 1 1 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`

interface IErrorWrapper {
  minWidth?: string
  minHeight?: string
}

export const Panel = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  padding-top: 7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 4rem;
  }
`
export const ContentContainer = styled.div`
  width: 100%;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    padding-right: unset;
    padding-left: unset;
  }
`

const StyledMap = ({ className }: { className?: string }) => <Image className={className} src={Map} alt="Map" fill />

export const BackgroundMap = styled(StyledMap)`
  position: absolute;
  object-fit: cover;
  bottom: 0;
  left: 0;

  filter: blur(1.6px);
`

export const Box = styled.div`
  width: 34rem;
  justify-content: flex-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 15%;
  gap: 2rem;

  background-image: ${({ theme }: { theme: Theme }) => css`
    linear-gradient(transparent, ${theme.color.black}B3);
  `};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 28rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 3%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
  }
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;

  transform: translateY(-10%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`
