"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"
import { FiArrowRight } from "react-icons/all"

export enum Status {
  SUCCESS,
  SENDING,
  FAILURE,
  NONE,
}

interface ITextField {
  minWidth?: string
  minHeight?: string
  alignItems?: string
  error?: string
  status?: Status
}

export const TextField = styled.input`
  border: solid 1px
    ${({ status = Status.NONE, theme }: ITextField & { theme: Theme }) => {
      switch (status) {
        case Status.NONE:
          return theme.color.white
        case Status.SUCCESS:
          return theme.accent
        case Status.FAILURE:
          return theme.color.red
      }
    }};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  background: transparent;
  border-radius: 0.2rem;
  min-width: ${({ minWidth }: ITextField) => minWidth ?? "12rem"};
  min-height: ${({ minHeight }: ITextField) => minHeight ?? "2rem"};
  padding: 0.1rem 1.5rem;
  bottom: 0.2rem;

  align-items: ${({ alignItems }: ITextField) => (alignItems ? alignItems : "center")};

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family};
  }

  &:focus {
    border: 1.5px solid ${({ theme }) => theme.accent};
    outline: none;
  }
`

interface ITextArea extends ITextField {
  maxHeight?: string
}

export const TextArea = styled.textarea`
  border: solid 1px
    ${({ status = Status.NONE, theme }: ITextField & { theme: Theme }) => {
      switch (status) {
        case Status.NONE:
          return theme.color.white
        case Status.SUCCESS:
          return theme.accent
        case Status.FAILURE:
          return theme.color.red
      }
    }};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  background: transparent;
  border-radius: 0.2rem;
  min-width: ${({ minWidth }: ITextArea) => minWidth ?? "12rem"};
  min-height: ${({ minHeight }: ITextArea) => minHeight ?? "6rem"};
  max-height: ${({ maxHeight }: ITextArea) => maxHeight ?? "12rem"};
  padding: 0.75rem 1.5rem;
  bottom: 0.2rem;
  resize: vertical;

  align-items: ${({ alignItems }: ITextField) => (alignItems ? alignItems : "center")};

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.accent};
    outline: none;
  }
`

const boxStyles = css`
  display: flex;
  align-items: center;
  position: relative;
`

export const Box = styled.div`
  ${boxStyles};

  flex-direction: ${({ flexDirection }: { flexDirection: string }) => flexDirection};
`

export const Form = styled.form`
  ${boxStyles};

  flex-direction: ${({ flexDirection }: { flexDirection: string }) => flexDirection};
`

export const Span = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 0.3rem;
`

const Arrow = ({ className }: { className?: string }) => <FiArrowRight className={className} />
export const ArrowIcon = styled(Arrow)`
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  right: 1em;
`

export const Input = styled.input`
  cursor: pointer;
  position: absolute;
  right: 1em;
  height: 1rem;
  width: 1rem;

  border-style: unset;
  background-color: transparent;
  outline: none;
`
export const ErrorWrapper = styled.div`
  display: flex;
  position: relative;
`
