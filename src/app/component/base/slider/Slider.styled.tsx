"use client"

import styled from "@emotion/styled"

interface IContainer {
  width: string
  height: string
}
export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: ${({ width }: IContainer) => width};
  height: ${({ height }: IContainer) => height};

  transition: all 0.5s ease-in-out;
`
