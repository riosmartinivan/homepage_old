"use client"

import styled from "@emotion/styled"
import { Subtitle, Text } from "../../base/Text"
import React from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2.5rem 16rem;
  margin-top: 3rem;

  background-color: rgba(171, 171, 171, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2.5rem 12rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.5rem 8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 2.5rem 6rem;
  }
`

interface IDescription {
  id?: string
  title: React.ReactNode | string
  description: React.ReactNode | string
}

const Description = ({ id, title, description }: IDescription) => (
  <Container id={id}>
    <Subtitle size="xl">{title}</Subtitle>
    <Text>{description}</Text>
  </Container>
)

export default Description
