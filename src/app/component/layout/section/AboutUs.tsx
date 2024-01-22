"use client"

import styled from "@emotion/styled"
import { Subtitle, Text } from "../../base/Text"
import React, { ElementType } from "react"

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Container = styled(TextBox)`
  padding: 6rem 24rem 8rem;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 12rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 8rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 3rem 2rem 0;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

interface IDescription {
  title: React.ReactNode | string
  description: React.ReactNode | string
  titleSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  descriptionSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

const TextComponent = ({
  title,
  description,
  titleSize,
  descriptionSize,
  as,
}: IDescription & { as: ElementType | undefined }) => (
  <TextBox>
    <Subtitle as={as} size={titleSize}>
      {title}
    </Subtitle>
    <Text size={descriptionSize}>{description}</Text>
  </TextBox>
)

interface IAboutUs {
  id?: string
  top: IDescription
  left: IDescription
  right: IDescription
}

const AboutUs = ({ id, top, left, right }: IAboutUs) => (
  <Container id={id}>
    <TextComponent as="h2" titleSize="xxl" descriptionSize="md" title={top.title} description={top.description} />
    <Box>
      <TextComponent as="h3" titleSize="lg" descriptionSize="sm" title={left.title} description={left.description} />
      <TextComponent as="h3" titleSize="lg" descriptionSize="sm" title={right.title} description={right.description} />
    </Box>
  </Container>
)

export default AboutUs
