"use client"

import React from "react"
import ServiceCard from "../../composite/servicecard/ServiceCard"
import styled from "@emotion/styled"
import { Subtitle } from "../../base/Text"
import useMediaQuery from "../../../functions/useMediaQuery"
import { useTheme } from "@emotion/react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 14rem;
  gap: 8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 8rem 8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 4rem 0;
  }
`

interface IServices {
  id?: string
  services: {
    icon: "box" | "persons" | "gears" | "contract"
    title: React.ReactNode | string
    description: React.ReactNode | string
  }[]
}

const Services = ({ id, services }: IServices) => {
  const theme = useTheme()
  const matchesMq = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

  return (
    <Container id={id}>
      <Subtitle size="xxl">
        What can <span>we do</span> for you?
      </Subtitle>
      {services.map(({ icon, title, description }, index) => {
        const orientation = index % 2 === 0 ? "left" : "right"
        return (
          <ServiceCard
            key={index}
            icon={matchesMq ? "hidden" : icon}
            orientation={orientation}
            title={title}
            description={description}
          />
        )
      })}
    </Container>
  )
}
export default Services
